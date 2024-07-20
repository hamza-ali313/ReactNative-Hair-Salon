import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import GradientButton from '../components/GradientButton';
import Img from '../assets/Images/index';
import font from '../assets/fonts/index';
import Icon from 'react-native-vector-icons/Feather';
import IconButton from '../components/IconButton';
import Text2 from '../components/Text2';
import Heading1 from '../components/Heading1';
import CircleArrow from '../components/CircleArrow';
import Input1 from '../components/Input1';

const WelcomeBack = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Img.bgImg}
        resizeMode="cover"
        style={styles.background}>
        <CircleArrow navigation={navigation} />
        <View style={styles.imageContainer}>
          <Image source={Img.get1} style={styles.image} />
        </View>
        <View style={{marginTop:50}}>
          <Heading1 title="Welcome Back" />
        </View>
        <Text2 title="Let's make your hair attractive" />
        <View style={{marginTop:150}}>
          <Text2 title="Enter your email" />
          <Input1 icon="email-outline" placeholder="Email" />
        </View>
        <View style={styles.textWrapper}>
          <Text2 title="Or" />
        </View>
        <IconButton title="Continue with google" img={Img.google} />
        <IconButton title="Continue with facebook" img={Img.facebook} />
        <GradientButton title="continue" navigation={navigation} nav="Confirmation"/>
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
  imageContainer: {
    position: 'absolute',
    top: 40,
    left: -100,
    opacity: 0.2,
  },
  image: {
    width: 700,
    height: 700,
    resizeMode: 'contain',
  },
  textWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WelcomeBack;
