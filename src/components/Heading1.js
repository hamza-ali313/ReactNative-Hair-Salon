import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import font from '../assets/fonts/index'

const Heading1 = ({title}) => {
  return (
    <View>
      <Text style={styles.text1}>{title}</Text>
    </View>
  );
};

export default Heading1;

const styles = StyleSheet.create({
  text1: {
    color: '#ffffff',
    fontSize: 42,
    lineHeight: 60,
    textAlign: 'left',
    fontFamily: font.PoppinsRegular,
  },
});
