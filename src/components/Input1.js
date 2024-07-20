import React, {useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input1 = ({icon, placeholder}) => {
  const [text, setText] = useState('');

  return (
    <View style={styles.inputContainer}>
      <Icon name={icon} size={20} color="#808080" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#808080"
        onChangeText={newText => setText(newText)}
        value={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#07162E',
    borderRadius: 45,
    width: '100%',
    padding: 8,
    borderColor: '#573D1A',
    borderWidth: 1,
    marginBottom: 5,
    marginTop: 20,
  },

  icon: {
    marginRight: 10,
    marginLeft: 10,
    fontSize: 30,
  },
  input: {
    flex: 1,
    color: '#fff',
    textTransform: 'capitalize',
    fontSize: 16,
  },
});

export default Input1;
