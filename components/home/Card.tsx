import { memo } from 'react';
import { Text, View } from 'react-native';

import tw from '~/configs/theme/tw';

const Card = () => {
  return (
    <View style={tw`h-40 w-60 items-center justify-center rounded-md bg-yellow-400 dark:bg-purple-700`}>
      <Text style={tw`text-lg font-bold text-black dark:text-white`}>I'am a card</Text>
    </View>
  );
};

export default memo(Card);
