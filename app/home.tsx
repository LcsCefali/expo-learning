import { useCallback } from 'react';
import { FlatList, ListRenderItemInfo, Text, View } from 'react-native';

import Card from '~/components/home/Card';
import ListItem from '~/components/home/ListItem';
import Button from '~/components/shared/Button';
import Separator from '~/components/shared/Separator';
import tw from '~/configs/theme/tw';
import useTheme from '~/hooks/useTheme';

const Home = () => {
  const { toogleTheme } = useTheme();

  const fakeData: {
    firstName: string;
    lastName: string;
    email: string;
  }[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com'
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com'
    },
    {
      firstName: 'Emily',
      lastName: 'Johnson',
      email: 'emily.johnson@example.com'
    },
    {
      firstName: 'Michael',
      lastName: 'Brown',
      email: 'michael.brown@example.com'
    },
    {
      firstName: 'Sarah',
      lastName: 'Davis',
      email: 'sarah.davis@example.com'
    }
  ];

  const renderItem = useCallback(
    ({ item: user }: ListRenderItemInfo<{ firstName: string; lastName: string; email: string }>) => {
      return <ListItem key={tw.memoBuster} firstName={user.firstName} lastName={user.lastName} email={user.email} />;
    },
    []
  );

  return (
    <View style={tw`flex-1 items-center justify-center gap-2 bg-light pt-4 dark:bg-dark`}>
      <Text style={tw`text-light dark:text-dark`}>Hello Home Screen</Text>

      <Button title='Change color scheme' onPress={toogleTheme} roundedFull />

      <Card key={tw.memoBuster} />

      <FlatList style={tw`w-full`} ItemSeparatorComponent={Separator} data={fakeData} renderItem={renderItem} />
    </View>
  );
};

export default Home;
