import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet } from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign:'center', fontSize: 60, color:"#fff"},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 70,
    height: 80,
    lineHeight: 38,
    fontSize: 30,
    fontWeight: 10,
    borderWidth: 2,
    textAlign: 'center',
    color:'#D49621',
    borderRadius: 25,
    borderColor: '#573D1A',
    borderWidth: 1,
    paddingVertical:20,
  },
  focusCell: {
    borderColor: '#755315',
  },
});

const CELL_COUNT = 4;

const ConfirmationCodeField = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Verification</Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={(text) => {
          // console.log('Changed text:', text);
          setValue(text);
        }}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        autoComplete={Platform.select({ android: 'sms-otp', default: 'one-time-code' })}
        testID="my-code-input"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor/> : null)}
          </Text>
        )}
      />
    </SafeAreaView>
  );
};

export default ConfirmationCodeField;