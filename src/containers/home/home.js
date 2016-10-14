import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export const Home = (props) =>
  <View style={styles.container}>
    <TouchableOpacity onPress={() => props.onNavigate({ key: `Home-${Date.now()}`, title: 'Nothing here' })}>
      <Text>Welcome Home</Text>
    </TouchableOpacity>
  </View>;

export default Home;
