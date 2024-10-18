import { useAuth } from '@/src/context/AuthProvider';
import { Stack, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

const AuthLayout = () => {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) {
      router.replace('/');
    }
  }, [loading, user, router]);

  return (
    <>
      <Stack>
        <Stack.Screen name='signin' options={{ headerShown: false }} />
        <Stack.Screen name='signup' options={{ headerShown: false }} />
      </Stack>

      <StatusBar backgroundColor='#161622' style='light' />
    </>
  );
};

export default AuthLayout;
