import { memo } from 'react';
import { View } from 'react-native';

import tw from '~/configs/theme/tw';

const Separator = () => {
  return <View testID='separator' style={tw`h-2 w-full`} />;
};

export default memo(Separator);
