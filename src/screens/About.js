// screens/DetailsScreen.js

import React from 'react';
import { Button, View, Text,StyleSheet } from 'react-native';

function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>
  
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

export default About;
