import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import font from '../assets/fonts/index';

const SimpleBtn = ({title, navigation}) => {
  return (
    
    <Pressable style={styles.container} onPress={() => navigation.goBack()}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default SimpleBtn;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#D49621',
    borderRadius: 60,
    width:100,
  },
  text: {
    fontSize: 17,
    color: '#D49621',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: font.PoppinsBold,
  },
});
