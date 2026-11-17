import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from '@tanstack/react-router';
import type { User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

const SessionContext = createContext<{user: User | null; ready: boolean}>({user: null, ready: false});
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
  return <SessionContext.Provider value={{user, ready}}>{children}</SessionContext.Provider>;
}