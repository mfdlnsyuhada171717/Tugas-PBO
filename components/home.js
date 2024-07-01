import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Home Screen</Text>
      <Button
        title="Go to Friends"
        onPress={() => navigation.navigate('FriendList')}
      />
    </View>
  );
}

