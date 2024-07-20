import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import font from '../assets/fonts/index';

const NameTag = ({img, title}) => {
  return (
    <View style={styles.container}>
      <Image source={img} style={styles.image} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default NameTag;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    // opacity:0.4,
    borderRadius: 50,
    height: 33,
    width: 93,
    paddingLeft: 8,
  },
  text: {
    color: '#fff',
    fontSize: 12,
    lineHeight: 12,
    fontFamily: font.PoppinsRegular,
    textTransform:'capitalize',
  },
  image: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 1,
  },
});
