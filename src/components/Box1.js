import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import font from '../assets/fonts/index'

const Box1 = ({img, text}) => {
  return (
    <View style={styles.box}>
      <Image source={img} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Box1;

const styles = StyleSheet.create({
  box: {
    width: 82,
    height: 110,
    lineHeight: 38,
    justifyContent:'center',
    alignItems:"center",
    fontSize: 30,
    fontWeight: 10,
    borderWidth: 2,
    color: '#D49621',
    borderRadius: 20,
    borderColor: '#573D1A',
    borderWidth: 2,
    marginRight: 10,
  },
  text: {
    color: "#fff",
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'left',
    marginTop: 14,
    fontFamily: font.PoppinsBold,
  }
});
