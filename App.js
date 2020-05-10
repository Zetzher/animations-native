/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
//import Animation1 from './components/Animation1';
//import Animation2 from './components/Animation2';
//import Animation3 from './components/Animation3';
//import Animation4 from './components/Animation4';
//import Animation5 from './components/Animation5';
//import Animation6 from './components/Animation6';
import Animation7 from './components/Animation7';


const App = () => {
  return (
    <>
    <View style={styles.contenido}>
     <Animation7 />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
 contenido: {
   marginTop: 100
 }
});

export default App;
