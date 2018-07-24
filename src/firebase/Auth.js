import { auth } from './Firebase.js';

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

  // Sign out
export const doSignOut = () =>
auth.signOut();