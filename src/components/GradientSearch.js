// GradientButton.js
import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import font from '../assets/fonts/index';
import Icon from 'react-native-vector-icons/Feather';

const GradientSearch = () => {
  return (
    <Pressable style={styles.container}>
      <LinearGradient
        colors={['#DCB654', '#F5E08F']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 2}}
        style={styles.gradient}
        >
        <Icon name="search" style={styles.icon}/>
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
  },
  gradient: {
    height: 60,
    width: 60,
    borderRadius: 35,
    justifyContent:"center",
    alignItems:"center",
  },
  icon: {
    color:'#fff',
    fontSize:26,
  }
});

export default GradientSearch;
