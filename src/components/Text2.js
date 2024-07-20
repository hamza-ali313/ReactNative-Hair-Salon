import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import font from '../assets/fonts/index'

const Text2 = ({title}) => {
  return (
    <View>
      <Text style={styles.text2}>{title}</Text>
    </View>
  );
};

export default Text2;

const styles = StyleSheet.create({
  text2: {
    color: 'gray',
    fontSize: 17,
    lineHeight: 20,
    textAlign: 'left',
    marginTop: 20,
    fontFamily: font.PoppinsBold,
  },
});
