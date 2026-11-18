
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from '@tanstack/react-router';
import type { User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { App } from '@capacitor/app';
import { Browser } from '@capacitor/browser';
import { Capacitor } from '@capacitor/core';

const SessionContext = createContext<{
  user: User | null;
  ready: boolean;
}>({
  user: null,
  ready: false,
});

const NATIVE_OAUTH_REDIRECT =
  'pl.randkadookolaswiata.app://auth/callback';

export const useAlbumSession = () => useContext(SessionContext);

export function AlbumSession({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);

  const queryClient = useQueryClient();
  const router = useRouter();

  useEffect(() => {
    let active = true;

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (!active) return;

      setUser(session?.user ?? null);
      setReady(true);

      if (event === 'SIGNED_OUT') {
        queryClient.clear();
      }

      if (
        ['SIGNED_IN', 'SIGNED_OUT', 'USER_UPDATED'].includes(event)
      ) {
        void router.invalidate();

        if (event !== 'SIGNED_OUT') {
          void queryClient.invalidateQueries();
        }
      }
    });

    void supabase.auth.getUser().then(({ data }) => {
      if (active) {
        setUser(data.user);
        setReady(true);
      }
    });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, [queryClient, router]);

  useEffect(() => {
    let active = true;
    let handledResponse: string | null = null;
    let removeListener: (() => void) | undefined;

    const handleOAuthUrl = async (url: string) => {
      if (!active) return;

      const isNativeCallback = url.startsWith(NATIVE_OAUTH_REDIRECT);
      const isWebCallback = url.startsWith(
        `${window.location.origin}/album`,
      );

      if (!isNativeCallback && !isWebCallback) return;

      const callbackUrl = new URL(url);

      const queryParams = callbackUrl.searchParams;
      const hashParams = new URLSearchParams(
        callbackUrl.hash.replace(/^#/, ''),
      );

      const getParam = (key: string) =>
        queryParams.get(key) ?? hashParams.get(key);

      const accessToken = getParam('access_token');
      const refreshToken = getParam('refresh_token');
      const code = getParam('code');

      const authError =
        getParam('error_description') ?? getParam('error');

      const finishNativeCallback = async () => {
        if (!active) return;

        await router.navigate({
          to: '/album',
          search: { country: undefined },
          replace: true,
        });

        await Browser.close().catch(() => {});
      };

      if (authError) {
        console.error('Google OAuth error:', authError);

        if (isNativeCallback) {
          await finishNativeCallback();
        }

        return;
      }

      const responseKey =
        accessToken && refreshToken
          ? `${accessToken.slice(-20)}:${refreshToken.slice(-10)}`
          : code
            ? `code:${code}`
            : url;

      if (handledResponse === responseKey) return;
      handledResponse = responseKey;

      try {
        if (accessToken && refreshToken) {
          const { error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          });

          if (error) throw error;
        } else if (code) {
          const { error } =
            await supabase.auth.exchangeCodeForSession(code);

          if (error) throw error;
        } else {
          const { data, error } = await supabase.auth.getSession();

          if (error) throw error;

          if (!data.session) {
            throw new Error('OAuth callback does not contain a session');
          }
        }

        if (isNativeCallback) {
          await finishNativeCallback();
        } else {
          await router.navigate({
            to: '/album',
            search: { country: undefined },
            replace: true,
          });
        }
      } catch (error) {
        console.error('OAuth session setup failed:', error);
        handledResponse = null;

        if (isNativeCallback) {
          await finishNativeCallback();
        }
      }
    };

    if (Capacitor.getPlatform() === 'android') {
      void (async () => {
        const listener = await App.addListener(
          'appUrlOpen',
          ({ url }) => {
            void handleOAuthUrl(url);
          },
        );

        if (!active) {
          await listener.remove();
          return;
        }

        removeListener = () => {
          void listener.remove();
        };

        const launch = await App.getLaunchUrl();

        if (active && launch?.url) {
          await handleOAuthUrl(launch.url);
        }
      })().catch((error) => {
        console.error('OAuth deep link listener failed:', error);
      });
    } else {
      void handleOAuthUrl(window.location.href);
    }

    return () => {
      active = false;
      removeListener?.();
    };
  }, []);

  return (
    <SessionContext.Provider value={{ user, ready }}>
      {children}
    </SessionContext.Provider>
  );
}
