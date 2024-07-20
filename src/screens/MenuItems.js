import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';

const menuItemsToDisplay = [
  { title: 'Appetizers', data: [
    { name: 'Hummus', price: '$5.00', id: '1A' },
    { name: 'Moutabal', price: '$5.00', id: '2B' },
    { name: 'Falafel', price: '$7.50', id: '3C' },
    { name: 'Marinated Olives', price: '$5.00', id: '4D' },
    { name: 'Kofta', price: '$5.00', id: '5E' },
    { name: 'Eggplant Salad', price: '$8.50', id: '6F' }
  ]},
  { title: 'Mains', data: [
    { name: 'Lentil Burger', price: '$10.00', id: '7G' },
    { name: 'Smoked Salmon', price: '$14.00', id: '8H' },
    { name: 'Kofta Burger', price: '$11.00', id: '9I' },
    { name: 'Turkish Kebab', price: '$15.50', id: '10J' }
  ]},
  { title: 'Sides', data: [
    { name: 'Fries', price: '$3.00', id: '11K' },
    { name: 'Buttered Rice', price: '$3.00', id: '12L' },
    { name: 'Bread Sticks', price: '$3.00', id: '13M' },
    { name: 'Pita Pocket', price: '$3.00', id: '14N' }
  ]},
  { title: 'Desserts', data: [
    { name: 'Lentil Soup', price: '$3.75', id: '15O' },
    { name: 'Greek Salad', price: '$6.00', id: '16Q' },
    { name: 'Rice Pilaf', price: '$4.00', id: '17R' },
    { name: 'Baklava', price: '$3.00', id: '18S' },
    { name: 'Tartufo', price: '$3.00', id: '19T' },
    { name: 'Tiramisu', price: '$5.00', id: '20U' },
    { name: 'Panna Cotta', price: '$5.00', id: '21V' }
  ]}
];

const Item = ({ name, price, id }) => ( 
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{id}</Text>
    <Text style={menuStyles.itemText}>{name}</Text>
    <Text style={menuStyles.itemText}>{price}</Text>
  </View>
);

const MenuItems = () => {
  const renderItem = ({ item }) => <Item id={item.id} name={item.name} price={item.price} />;
  const renderSectionHeader = ({ section: { title } }) => <Text style={menuStyles.sectionHeader}>{title}</Text>;

  return (
    <View style={menuStyles.container}>
      <SectionList
        sections={menuItemsToDisplay}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    color: '#000',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'left',
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    padding: 10,
    textAlign: 'center',
  },
});

export default MenuItems;
