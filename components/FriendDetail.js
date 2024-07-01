import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function FriendDetail({ route }) {
  const { friend } = route.params;
  return (
    <View style={styles.container}>
      <Image source={friend.profilePicture} style={styles.profilePicture} />
      <Text>Name: {friend.name}</Text>
      <Text>ID: {friend.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
});
