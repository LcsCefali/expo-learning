import { Text, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

import Button from '~/components/shared/Button';
import tw from '~/configs/theme/tw';
import useTheme from '~/hooks/useTheme';

export default function Index() {
  const { theme, toogleTheme } = useTheme();

  return (
    <View style={tw.style('flex-1 items-center justify-center gap-8 bg-light', 'dark:bg-dark')}>
      <Text style={tw`text-base text-light dark:text-dark`}>Current theme mode: {theme}</Text>

      <Button title='Change color scheme' onPress={toogleTheme} roundedFull />

      <MaterialCommunityIcons
        name='account-box-outline'
        color={tw.style('text-light dark:text-dark').color as string}
        size={50}
      />

      <Link href='/home' asChild>
        <Button title='Send me to home' />
      </Link>

      <Link href='/welcome' asChild>
        <Button title='Open modal Welcome' />
      </Link>
    </View>
  );
}
