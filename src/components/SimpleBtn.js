import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import font from '../assets/fonts/index'


const SimpleBtn = ({title}) => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default SimpleBtn

const styles = StyleSheet.create({
    container: {
      width: "100%",
      padding:20,
      borderRadius: 25, 
      borderWidth: 1,
      borderColor: '#D49621',
      borderRadius: 50,
      marginBottom:20,
    },

    text: {
      fontSize: 17,
      color: '#D49621',
      textAlign: 'center',
      textTransform:'uppercase',
      fontFamily:font.PoppinsBold
    }
  });
  