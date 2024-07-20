import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

const CircleArrow = ({navigation}) => {
  return (
    <Pressable style={styles.circle}  onPress={() => navigation.goBack()}>
      <Icon name="arrow-left" size={25} style={styles.arrowLeft}/>
    </Pressable>
  );
};

export default CircleArrow;

const styles = StyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#FFA500',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowLeft: {
    color: '#D49621',
    fontSize: 35,
  },
});
