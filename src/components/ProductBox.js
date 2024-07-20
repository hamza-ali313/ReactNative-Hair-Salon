import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
import Circle1 from '../components/Circle1';
import font from '../assets/fonts/index';
import NameTag from './NameTag';
import Img from '../assets/Images/index';

const ProductBox = ({
  img,
  progress,
  title,
  address,
  distance,
  icons,
  type,
  price,
}) => {
  return (
    <View style={styles.container}>
      {type == 'topStylist' ? (
        <View style={styles.icons}>
          {icons.map((icon, index) => (
            <Circle1 key={index} img={icon} />
          ))}
        </View>
      ) : type == 'recent' ? (
        <NameTag title="sarah J" img={Img.sarah} style={styles.nametag} />
      ) : null}
      <Image source={img} style={styles.img} />
      {/* <Progress.Circle
          size={progress}
          indeterminate={true}
          animated={false}
        /> */}
      <View style={{paddingTop: 5, paddingLeft: 6}}>
        <Text style={styles.title}>{title}</Text>
        {type == 'topStylist' ? (
          <Text style={styles.title}>
            <Text style={styles.address}>({address}) </Text>
            {distance}
          </Text>
        ) : type == 'recent' ? (
          <Text style={styles.title}>
            {price}
          </Text>
        ) : null}
      </View>
    </View>
  );
};

export default ProductBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D49621',
    position: 'relative',
    marginRight: 10,
    paddingHorizontal: 7,
    paddingTop: 7,
    paddingBottom: 25,
    borderRadius: 12,
  },
  icons: {
    flexDirection: 'row',
    position: 'absolute',
    top: 15,
    left: 15,
    zIndex: 2,
  },
  nametag: {
    // position: 'absolute',
    // top: 15,
    // left: 15,
    marginTop: 10,
  },
  title: {
    color: '#fff',
    fontFamily: font.PoppinsRegular,
    fontSize: 15,
  },
  address: {
    color: '#fff',
    fontFamily: font.PoppinsRegular,
    fontSize: 14,
    opacity: 0.2,
  },
  img: {
    width: 144,
    height: 150,
    borderRadius: 12,
    resizeMode: 'contain',
  },
});
