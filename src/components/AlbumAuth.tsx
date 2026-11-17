import { useState, type FormEvent } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { lovable } from '@/integrations/lovable';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import '@lovable.dev/cloud-auth-js/styles.css';

export function AlbumAuth() {
  const [mode, setMode] = useState<'login'|'signup'|'forgot'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  async function submit(e: FormEvent) {
    e.preventDefault(); setBusy(true); setMessage('');
    try {
      const result = mode === 'forgot'
        ? await supabase.auth.resetPasswordForEmail(email, {redirectTo: `${window.location.origin}/reset-password`})
        : mode === 'signup'
        ? await supabase.auth.signUp({email,password,options:{emailRedirectTo:`${window.location.origin}/album`}})
        : await supabase.auth.signInWithPassword({email,password});
      if (result.error) throw result.error;
      if (mode !== 'login') setMessage(mode === 'signup' ? 'Sprawdź pocztę i potwierdź konto, aby otworzyć album.' : 'Sprawdź pocztę — wysłaliśmy link do zmiany hasła.');
    } catch {setMessage('Nie udało się kontynuować. Sprawdź dane lub spróbuj ponownie.');}
    finally {setBusy(false);}
  }
  async function social(provider: 'google'|'lovable') {
    setBusy(true); setMessage('');
    try {
      const result = await lovable.auth.signInWithOAuth(provider,{redirect_uri:`${window.location.origin}/album`});
      if (result.error) throw result.error;
    } catch {setMessage('Nie udało się zalogować. Spróbuj ponownie.');}
    finally {setBusy(false);}
  }
  return <section className="max-w-sm mx-auto py-10 space-y-5">
    <h2 className="text-2xl text-center">{mode === 'signup' ? 'Załóż konto' : mode === 'forgot' ? 'Odzyskaj hasło' : 'Zaloguj się do albumu'}</h2>
    {mode !== 'forgot' && <div className="space-y-3">
      <Button className="google-auth w-full h-11" disabled={busy} onClick={() => social('google')}>
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"/><path fill="#FBBC05" d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"/></svg>
        Kontynuuj z Google
      </Button>
      <Button className="lovable-auth-button w-full h-11" disabled={busy} onClick={() => social('lovable')}>Kontynuuj z Lovable</Button>
    </div>}
    <form className="space-y-4" onSubmit={submit}>
      <label className="block space-y-2"><span>E-mail</span><Input type="email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} required /></label>
      {mode !== 'forgot' && <label className="block space-y-2"><span>Hasło</span><Input type="password" autoComplete={mode === 'signup' ? 'new-password':'current-password'} minLength={8} value={password} onChange={e => setPassword(e.target.value)} required /></label>}
      <Button className="w-full" disabled={busy}>{mode === 'signup' ? 'Załóż konto' : mode === 'forgot' ? 'Wyślij link' : 'Zaloguj się'}</Button>
    </form>
    {message && <p role="status" className="text-sm text-muted-foreground">{message}</p>}
    <div className="flex flex-wrap justify-center gap-2">
      <Button variant="link" onClick={() => {setMode(mode === 'login' ? 'signup':'login');setMessage('');}}>{mode === 'login' ? 'Nie mam konta':'Mam już konto'}</Button>
      {mode === 'login' && <Button variant="link" onClick={() => {setMode('forgot');setMessage('');}}>Nie pamiętam hasła</Button>}
    </div>
  </section>;
}