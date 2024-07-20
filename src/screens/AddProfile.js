import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Img from '../assets/Images/index';
import Text2 from '../components/Text2';
import Heading1 from '../components/Heading1';
import SkipBtn from '../components/SkipBtn';
import Input1 from '../components/Input1';
import SimpleBtn from '../components/SimpleBtn';
import Icon from 'react-native-vector-icons/Feather';
import img from '../assets/Images/index'


const AddProfile = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={Img.bgImg} resizeMode="cover">
        <View style={styles.background}>
          <SkipBtn navigation={navigation} title="skip" />
          <View style={styles.imageContainer}>
            <Image source={Img.confirm} style={styles.image1} />
          </View>
          <View style={{marginTop: 50}}>
            <Heading1 title="How people to know you?" />
          </View>
        </View>
        <ScrollView style={styles.bg}>
          <View style={styles.profilePictureContainer}>
            <Text2 title="Add profile picture" />
            <View style={styles.profilePicture} >
              <Image
                source={img.pro1}
                style={styles.image2}
              />
              <TouchableOpacity style={styles.addIcon}>
                <Icon name="plus" size={30} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text2 title="Enter your name" />
            <Input1 icon="account" placeholder="User name" />
          </View>
          <View>
            <Text2 title="Enter phone number" />
            <Input1 icon="phone" placeholder="Phone number" />
          </View>
          <View style={{marginTop: 15}}>
            <SimpleBtn title="done" />
          </View>
        </ScrollView>
      </ImageBackground>
    </ScrollView>
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
  bg: {
    backgroundColor: '#0C0A22',
    borderTopLeftRadius: 12,
    borderTopEndRadius: 12,
    padding: 20,
  },
  imageContainer: {
    position: 'absolute',
    bottom: 0,
    left: -50,
  },
  image1: {
    width: 478,
    height: 521,
    resizeMode: 'contain',
  },
  textWrapper: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  profilePicture: {
    position: 'relative',
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth:1,
    borderColor: '#9D701D',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:15
  },
  image2: {
    width: 120,
    height: 120,
    borderRadius: 50,
  },
  addIcon: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    width: 40,
    height: 40,
    backgroundColor: '#9D701D',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddProfile;
