import { getApp, getApps, initializeApp } from 'firebase/app';
import {
  initializeAuth,
  onAuthStateChanged,
  getReactNativePersistence,
} from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.EXPO_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const FIREBASE_AUTH = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

const FIREBASE_DB = getFirestore(app);
const FIREBASE_STORAGE = getStorage(app);

export { FIREBASE_AUTH, FIREBASE_DB, FIREBASE_STORAGE, onAuthStateChanged };

// export const authenticatedUser = async () => {
//   const user = FIREBASE_AUTH.currentUser;
//   const token = await user.getIdToken();

//   const headers = {
//     Authorization: `Bearer ${token}`,
//   };

//   // console.log(headers);
//   return headers;
// };
