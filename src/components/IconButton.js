import {Pressable, StyleSheet, Text, Image} from 'react-native';
import React from 'react';
import font from '../assets/fonts/index'

const IconButton = ({title, img}) => {
  return (
    <Pressable style={styles.container}>
        <Image
            source={img}
            style={styles.image}
          />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: "100%",
    padding:20,
    borderRadius: 25, 
    borderWidth: 1,
    borderColor: '#573D1A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom:20,
  },
  image : {
    position:'absolute',
    left:20,
  },
  text: {
    fontSize: 17,
    color: '#fff',
    textAlign: 'center',
    textTransform:'uppercase',
    fontFamily:font.PoppinsBold
  }
});
