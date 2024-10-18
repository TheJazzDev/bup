import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { FIREBASE_AUTH, onAuthStateChanged } from '../../firebase.config';

interface AuthContextType {
  user: any;
  loading: boolean;
  signout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user: any) => {
    //   console.log(user);
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  //   useEffect(() => {
  //     setAuthPersistence().then((res: any) => {
  //       console.log(res);
  //       const unsubscribe = FIREBASE_AUTH.onAuthStateChanged((user: any) => {
  //         console.log('our user here', user);
  //         setUser(user);
  //         setLoading(false);
  //       });

  //       return unsubscribe;
  //     });
  //   }, []);

  const signout = () => {
    return FIREBASE_AUTH.signOut();
  };

  const value = { user, signout, loading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};
