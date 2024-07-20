import React, { useEffect } from 'react';
import {StyleSheet, View, Text, LogBox} from 'react-native';
import StackNav from './routes/StackNav';

export default function App() {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <>
      <StackNav />
    </>
  );
}
