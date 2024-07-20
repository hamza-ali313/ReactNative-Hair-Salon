// screens/HomeScreen.js

import React from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";

function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Home Screen</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
      <FontAwesome name="music" size={80} color={'white'} />
    </View>
  );
}

const styles = StyleSheet.create({
  text:{
    color:"#fff",
    backgroundColor:"#000",
    padding: 10,
    fontSize: 22,
  },
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  }
})
export default Home;
