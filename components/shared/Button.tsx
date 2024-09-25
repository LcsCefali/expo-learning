import { forwardRef } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import tw from '~/configs/theme/tw';

type Props = {
  title: string;
  roundedFull?: boolean;
  onPress?: () => void;
};

const Button = forwardRef<TouchableOpacity, Props>(({ title, roundedFull = false, onPress }, ref) => {
  return (
    <TouchableOpacity
      testID='button'
      ref={ref}
      activeOpacity={0.7}
      style={tw.style('rounded-sm bg-button-light p-3 px-6 dark:bg-button-dark', { 'rounded-full': roundedFull })}
      onPress={onPress}
    >
      <Text testID='button-text' style={tw`text-button-light dark:text-button-dark`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
});

export default Button;
