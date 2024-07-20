import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import GradientButton from '../components/GradientButton';
import Img from '../assets/Images/index';
import font from '../assets/fonts/index';
import Icon from 'react-native-vector-icons/AntDesign';
import Text2 from '../components/Text2';
import Heading1 from '../components/Heading1';
import CircleArrow from '../components/CircleArrow';
import SimpleBtn from '../components/SimpleBtn';
import ConfirmationCodeField from '../components/ConfirmationCodeField';

const WelcomeBack = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Img.bgImg}
        resizeMode="cover"
        style={styles.background}>
        <CircleArrow navigation={navigation}/>
        <View style={styles.imageContainer}>
          <Image source={Img.confirm} style={styles.image} />
        </View>
        <View style={{marginTop: 50}}>
          <Heading1 title="Confirmation" />
        </View>
        <Text2 title="Enter 4 digit code we sent to your email" />
        <SafeAreaView style={{marginVertical: 20}}>
          <ConfirmationCodeField />
        </SafeAreaView>
        <Pressable style={styles.textWrapper}>
          <Icon
            name="reload1"
            size={25}
            style={{
              color: '#D49621',
            }}
          />
          <Text
            style={{
              color: '#D49621',
              fontSize: 17,
              lineHeight: 20,
              textAlign: 'left',
              marginTop: 20,
              fontFamily: font.PoppinsBold,
            }}>
            Resend code
          </Text>
        </Pressable>
        <GradientButton title="continue" navigation={navigation} />
        <View style={{marginTop: 20}}>
          <SimpleBtn title="other methods" navigation={navigation} />
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
  imageContainer: {
    position: 'absolute',
    bottom: 0,
    left: -50,
  },
  image: {
    width: 478,
    height: 521,
    resizeMode: 'contain',
  },
  textWrapper: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:50,
  },
});

export default WelcomeBack;
