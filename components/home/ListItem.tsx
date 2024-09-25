import { memo } from 'react';
import { Text, View } from 'react-native';

import tw from '~/configs/theme/tw';

type Props = { firstName: string; lastName: string; email: string };

const ListItem = ({ firstName, lastName, email }: Props) => {
  return (
    <View style={tw`mx-2 flex-1 rounded-md bg-dark p-5 dark:bg-lighter`}>
      <Text style={tw`text-button-light`} numberOfLines={1}>
        {firstName} {lastName} - {email}
      </Text>
    </View>
  );
};

export default memo(ListItem);
