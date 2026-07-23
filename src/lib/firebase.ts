import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  projectId: "mimetic-resolver-7szp9",
  appId: "1:92251035376:web:0e0b135d58c86431495435",
  apiKey: "AIzaSyARzkGVZMnvklPOqtxFkW2fgUs5Ygptum0",
  authDomain: "mimetic-resolver-7szp9.firebaseapp.com",
  storageBucket: "mimetic-resolver-7szp9.firebasestorage.app",
  messagingSenderId: "92251035376",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app, "ai-studio-db568c1d-8b0e-4516-aca9-49a0e8a4d4bc");
export const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    // Usa signInWithRedirect se la pagina non è in un iframe. 
    // Questo previene problemi di popup bloccati o schermate bianche.
    if (window !== window.top) {
      const result = await signInWithPopup(auth, googleProvider);
      return result.user;
    } else {
      await signInWithRedirect(auth, googleProvider);
      return null;
    }
  } catch (error: any) {
    if (error.code === 'auth/popup-closed-by-user') {
      console.log('User closed the login popup.');
      return null;
    }
    console.error("Error signing in with Google", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out", error);
  }
};
