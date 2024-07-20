import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const ProfilePic = ({img}) => {
  return (
    <View style={styles.container}>
      <Image source={img} style={styles.image}/>
    </View>
  );
};

export default ProfilePic;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#D49621",
    padding:10,
    height: 63,
    width: 63,
    borderRadius:100,
    justifyContent:"center",
    alignItems:"center"
  },
  image: {
    height: 55,
    width: 55,
    resizeMode: 'cover',
    borderRadius:100,
  },
});
