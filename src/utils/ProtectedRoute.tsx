import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { router } from 'expo-router';
import { useAuth } from '../context/AuthProvider';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/signin');
    }
  }, [loading, user]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='#0000ff' />
      </View>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
