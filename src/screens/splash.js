import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GradientButton from '../components/GradientButton';
import Img from '../assets/Images/index'
import font from '../assets/fonts/index'
import Heading1 from '../components/Heading1';
import Text2 from '../components/Text2';

const splash = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Img.bgImg}
        resizeMode="cover"
        style={styles.background}>
        <View style={styles.icon}>
          <Image source={Img.icon1} />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={Img.get1}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Heading1 title="Let your hair, Speak for itself"/>
        </View>
        <View style={styles.textWrapper}>
          <Text2 title="Let's make your hair attractive"/>
        </View>
        <View style={styles.buttonContainer}>
          <GradientButton
            title="get started"
            navigation={navigation}
            nav='WelcomeBack'
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    padding: 20,
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  imageContainer: {
    position: 'absolute',
    top: -30,
    left: -100,
  },
  image: {
    width: 700,
    height: 700,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 0.75,
    justifyContent: 'flex-end',
  },
  textWrapper: {
    flex: 0.1,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems:'flex-start',
  },
});

export default splash;
