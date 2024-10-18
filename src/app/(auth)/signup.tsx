import { Pressable, StyleSheet } from 'react-native';

import { Text, View } from '@/src/components/Themed';
import { router } from 'expo-router';

export default function SignupScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup Screen</Text>
      <Pressable onPress={() => router.push('/signin')}>
        <Text className='text-xl mt-6'>Go to sign in</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
