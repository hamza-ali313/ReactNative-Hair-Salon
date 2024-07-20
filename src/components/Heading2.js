import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import font from '../assets/fonts/index'

const Heading2 = ({title}) => {
  return (
    <View>
      <Text style={styles.text1}>{title}</Text>
    </View>
  );
};

export default Heading2;

const styles = StyleSheet.create({
  text1: {
    color: '#ffffff',
    fontSize: 30,
    lineHeight: 64,
    textAlign: 'left',
    fontFamily: font.PoppinsRegular,
  },
});
