import { getApp, getApps, initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from 'firebase/auth';
import firebaseConfig from '../../firebase-applet-config.json';

export const GMAIL_SCOPES = [
  'https://mail.google.com/',
  'https://www.googleapis.com/auth/gmail.addons.current.action.compose',
  'https://www.googleapis.com/auth/gmail.addons.current.message.action',
  'https://www.googleapis.com/auth/gmail.addons.current.message.metadata',
  'https://www.googleapis.com/auth/gmail.addons.current.message.readonly',
  'https://www.googleapis.com/auth/gmail.compose',
  'https://www.googleapis.com/auth/gmail.insert',
  'https://www.googleapis.com/auth/gmail.labels',
  'https://www.googleapis.com/auth/gmail.metadata',
  'https://www.googleapis.com/auth/gmail.modify',
  'https://www.googleapis.com/auth/gmail.readonly',
  'https://www.googleapis.com/auth/gmail.send',
  'https://www.googleapis.com/auth/gmail.settings.basic',
  'https://www.googleapis.com/auth/gmail.settings.sharing',
] as const;

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Tokenlar güvenlik kuralı gereği yalnızca bellekte (in-memory) tutulur; localStorage/sessionStorage kullanılmaz.
let cachedAccessToken: string | null = null;
let isSigningIn = false;

export function getAccessToken(): string | null {
  return cachedAccessToken;
}

export function clearCachedAccessToken(): void {
  cachedAccessToken = null;
}

export function initAuth(onUserChange: (user: User | null) => void): () => void {
  return onAuthStateChanged(auth, (user) => {
    if (!user) {
      cachedAccessToken = null;
    }
    onUserChange(user);
  });
}

export interface GoogleSignInResult {
  user: User;
  accessToken: string;
}

export async function googleSignIn(): Promise<GoogleSignInResult> {
  if (isSigningIn) {
    throw new Error('Oturum açma penceresi zaten açık. Lütfen işlemi tamamlayın.');
  }

  isSigningIn = true;
  try {
    const provider = new GoogleAuthProvider();
    for (const scope of GMAIL_SCOPES) {
      provider.addScope(scope);
    }
    provider.setCustomParameters({
      prompt: 'consent',
      access_type: 'online',
    });

    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);

    if (!credential?.accessToken) {
      throw new Error('Google erişim belirteci (access token) alınamadı. Lütfen tekrar deneyin.');
    }

    cachedAccessToken = credential.accessToken;
    return {
      user: result.user,
      accessToken: credential.accessToken,
    };
  } catch (err: unknown) {
    const firebaseErr = err as { code?: string; message?: string };
    if (firebaseErr?.code === 'auth/popup-closed-by-user') {
      throw new Error('Google oturum açma penceresi tamamlanmadan kapatıldı.');
    }
    if (firebaseErr?.code === 'auth/cancelled-popup-request') {
      throw new Error('Önceki oturum açma isteği iptal edildi. Lütfen tekrar deneyin.');
    }
    if (firebaseErr?.code === 'auth/popup-blocked') {
      throw new Error(
        'Tarayıcınız açılır pencereyi engelledi. Lütfen açılır pencerelere izin verip tekrar deneyin.'
      );
    }
    throw new Error(
      firebaseErr?.message || 'Google ile oturum açılırken beklenmeyen bir hata oluştu.'
    );
  } finally {
    isSigningIn = false;
  }
}

export async function logout(): Promise<void> {
  cachedAccessToken = null;
  await signOut(auth);
}
