import { View, Text } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import tw from '~/configs/theme/tw';

const Welcome = () => {
  const isPresented = router.canGoBack();

  return (
    <View style={tw`flex-1 items-center justify-center bg-light dark:bg-blue-600`}>
      <StatusBar style={tw.prefixMatch('ios') ? 'light' : 'auto'} />

      <Text style={tw`text-light dark:text-dark`}>Hello Home Screen</Text>

      {isPresented && (
        <Link href='../' asChild>
          <MaterialCommunityIcons
            name='close'
            size={40}
            color={tw.prefixMatch('dark') ? tw.color('bg-light') : tw.color('bg-dark')}
          />
        </Link>
      )}
    </View>
  );
};

export default Welcome;
