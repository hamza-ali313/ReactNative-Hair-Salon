import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import ProfilePic from '../components/ProfilePic';
import Img from '../assets/Images/index';
import GradientSearch from '../components/GradientSearch';
import Heading1 from '../components/Heading1';
import Text2 from '../components/Text2';
import Box1 from '../components/Box1';
import ProductBox from '../components/ProductBox';
import Heading2 from '../components/Heading2';

const MainScreen = () => {
  const CateItems = [
    {name: 'Trending', icon: Img.main1},
    {name: 'Nearby', icon: Img.main2},
    {name: 'Recents', icon: Img.main3},
    {name: 'Popular', icon: Img.main4},
  ];

  const Products = [
    {
      title: 'Omnis iste',
      address: '1609 Oak, St.',
      distance: '2km',
      progress: 30,
      img: Img.topStylist1,
      icons: [Img.chair, Img.bag],
    },
    {
      title: 'Omnis iste',
      address: '1609 Oak, St.',
      distance: '2km',
      progress: 30,
      img: Img.topStylist2,
      icons: [Img.chair],
    },
    {
      title: 'Omnis iste',
      address: '1609 Oak, St.',
      distance: '2km',
      progress: 30,
      img: Img.topStylist3,
      icons: [Img.chair, Img.bag],
    },
  ];

  const recentProducts = [
    {
      title: 'Deep mask',
      price: '$59.00',
      progress: 30,
      img: Img.recent1,
    },
    {
      title: 'Deep mask',
      price: '$59.00',
      progress: 30,
      img: Img.recent2,
    },
    {
      title: 'Deep mask',
      price: '$59.00',
      progress: 30,
      img: Img.recent3,
    },
  ];

  return (
    <ScrollView style={styles.mainscreeen}>
      <View style={styles.profrow}>
        <ProfilePic img={Img.prof1} />
        <GradientSearch />
      </View>
      <Heading1 title="Hi Sarah," />
      <Text2 title="Let's make a new style!" />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
        {CateItems.map((item, i) => (
          <Box1
            key={i}
            img={item.icon}
            text={item.name}
            style={styles.boxItem}
          />
        ))}
      </ScrollView>
      <Heading2 title="Top stylists" />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
        {Products.map((item, i) => (
          <ProductBox
            img={item.img}
            progress={item.progress}
            title={item.title}
            address={item.address}
            distance={item.distance}
            icons={item.icons}
            type="topStylist"
            key={i}
          />
        ))}
      </ScrollView>
      <Heading2 title="Recent products" />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
        {recentProducts.map((item, i) => (
          <ProductBox
            title={item.title}
            price={item.price}
            progress={item.progress}
            img={item.img}
            type="recent"
            key={i}
          />
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  mainscreeen: {
    padding: 20,
    backgroundColor: '#17152D',
  },
  profrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  image: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  scrollView: {
    marginVertical: 20,
  },
  boxItem: {
    // marginHorizontal: 20,
  },
});
