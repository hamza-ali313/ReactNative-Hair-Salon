// GradientButton.js
import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import font from '../assets/fonts/index';

const GradientButton = ({title,navigation,nav}) => {
  return (
    <Pressable style={styles.btn} onPress={() => navigation.navigate(nav)}>
      <LinearGradient
        colors={['#F4BB01', '#DCB654', '#F5E08F', '#E8B832', '#C78015']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 2}}
        style={styles.gradient}>
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    color: '#000',
    borderRadius: 50,
    width: '100%',
  },
  gradient: {
    paddingVertical: 20,
    // paddingHorizontal: 110,
    borderRadius: 35,
  },
  text: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: font.PoppinsBold,
  },
});

export default GradientButton;
