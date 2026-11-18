
import { createLovableAuth } from '@lovable.dev/cloud-auth-js';
import type { OAuthProvider } from '@lovable.dev/cloud-auth-js';
import { supabase } from '@/integrations/supabase/client';

const lovableAuth = createLovableAuth({
  oauthBrokerUrl: 'https://randka-dookola-swiata.lovable.app/~oauth/initiate',
});

export const lovable = {
  auth: {
    signInWithOAuth: async (
      provider: OAuthProvider,
      opts?: {
        redirect_uri?: string;
        extraParams?: Record<string, string>;
      },
    ) => {
      const result = await lovableAuth.signInWithOAuth(provider, opts);

      if (result.redirected || result.error) {
        return result;
      }

      try {
        await supabase.auth.setSession(result.tokens);
      } catch (error) {
        return {
          error: error instanceof Error ? error : new Error(String(error)),
        };
      }

      return result;
    },
  },
};
