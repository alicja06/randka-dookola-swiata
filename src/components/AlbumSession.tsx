import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from '@tanstack/react-router';
import type { User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { App } from '@capacitor/app';
import { Browser } from '@capacitor/browser';
import { Capacitor } from '@capacitor/core';

const SessionContext = createContext<{user: User | null; ready: boolean}>({user: null, ready: false});
const NATIVE_OAUTH_REDIRECT = 'pl.randkadookolaswiata.app://auth/callback';
export const useAlbumSession = () => useContext(SessionContext);
export function AlbumSession({children}: {children: ReactNode}) {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);
  const queryClient = useQueryClient();
  const router = useRouter();
  useEffect(() => {
    let active = true;
    const {data: {subscription}} = supabase.auth.onAuthStateChange((event, session) => {
      if (!active) return;
      setUser(session?.user ?? null);
      setReady(true);
      if (event === 'SIGNED_OUT') queryClient.clear();
      if (['SIGNED_IN', 'SIGNED_OUT', 'USER_UPDATED'].includes(event)) {
        void router.invalidate();
        if (event !== 'SIGNED_OUT') void queryClient.invalidateQueries();
      }
    });
    void supabase.auth.getUser().then(({data}) => {if (active) {setUser(data.user); setReady(true);}});
    return () => {active = false; subscription.unsubscribe();};
  }, [queryClient, router]);

  useEffect(() => {
    let active = true;
    let handledResponse: string | null = null;
    let removeListener: (() => void) | undefined;

    const handleOAuthUrl = async (url: string) => {
      if (!active) return;

      const isNativeCallback = url.startsWith(NATIVE_OAUTH_REDIRECT);
      const isWebCallback =
        url.startsWith(`${window.location.origin}/album`);

      if (!isNativeCallback && !isWebCallback) return;

      const callbackUrl = new URL(url);
      const params = new URLSearchParams(callbackUrl.hash.slice(1));

      const accessToken = params.get('access_token');
      const refreshToken = params.get('refresh_token');

      const authError =
        params.get('error_description') ??
        params.get('error') ??
        callbackUrl.searchParams.get('error_description') ??
        callbackUrl.searchParams.get('error');

      if (authError) {
        console.error('Google OAuth error:', authError);
        if (isNativeCallback) await Browser.close().catch(() => {});
        return;
      }

      if (!accessToken || !refreshToken) {
        console.error('Google OAuth callback: missing session tokens');
        if (isNativeCallback) await Browser.close().catch(() => {});
        return;
      }

      const responseKey = `${accessToken.slice(-20)}:${refreshToken.slice(-10)}`;
      if (handledResponse === responseKey) return;
      handledResponse = responseKey;

      try {
        const { error } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        });

        if (error) throw error;

if (isNativeCallback) {
  await router.navigate({
    to: '/album',
    search: { country: undefined },
    replace: true,
  });
} else {
  window.history.replaceState(
    window.history.state,
    '',
    callbackUrl.pathname + callbackUrl.search,
  );
}
      } catch (error) {
        console.error('OAuth session setup failed:', error);
        handledResponse = null;
      } finally {
        if (isNativeCallback) await Browser.close().catch(() => {});
      }
    };

    if (Capacitor.getPlatform() === 'android') {
      void (async () => {
        const listener = await App.addListener('appUrlOpen', ({ url }) => {
          void handleOAuthUrl(url);
        });

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
      })().catch(error => {
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

  return <SessionContext.Provider value={{user, ready}}>{children}</SessionContext.Provider>;
}