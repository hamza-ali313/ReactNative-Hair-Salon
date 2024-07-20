import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Circle1 = ({img}) => {
  return (
    <View style={styles.container}>
      <Image source={img}/>
    </View>
  );
};

export default Circle1;

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: "#CC8819",
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding:10,
    height: 30,
    width: 30,
    borderRadius:100,
    justifyContent:"center",
    alignItems:"center",
    marginRight: 5,
    opacity:0.9,
  },
});
