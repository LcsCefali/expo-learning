import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import tw from '~/configs/theme/tw';
import useDevice from '~/hooks/useDevice';
import useTheme from '~/hooks/useTheme';

export default function RootLayout() {
  useDevice();
  const { isDark } = useTheme();

  return (
    <>
      <StatusBar
        key={tw.memoBuster}
        animated
        translucent={true}
        style={isDark ? 'light' : 'dark'}
        backgroundColor='transparent'
      />
      <Stack
        screenOptions={{
          headerStyle: tw.style({
            backgroundColor: isDark ? tw.color('bg-dark') : tw.color('bg-light')
          }),
          headerTintColor: isDark ? tw.color('text-button-dark') : tw.color('text-button-light'),
          headerBackTitleVisible: false
        }}
      >
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='home' options={{ headerTitle: 'Home' }} />
        <Stack.Screen
          name='welcome'
          options={{ presentation: 'modal', animation: 'slide_from_bottom', headerShown: false }}
        />
      </Stack>
    </>
  );
}
