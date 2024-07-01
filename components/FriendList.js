import React from 'react';
import { View, Text, Button, FlatList, Image } from 'react-native';

const friends = [
  { id: '1', name: 'Farel', profilePicture: require('../assets/farel.jpg') },
  { id: '2', name: 'Fadlan', profilePicture: require('../assets/fadlan.jpg') },
  { id: '3', name: 'Emilia', profilePicture: require('../assets/emil.jpg') },
];

export default function FriendList({ navigation }) {
  return (
    <FlatList
      data={friends}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <Text>{item.name}</Text>
          <Button
            title="View Details"
            onPress={() => navigation.navigate('FriendDetail', { friend: item })}
          />
        </View>
      )}
    />
  );
}
