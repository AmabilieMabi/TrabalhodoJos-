import { View, StyleSheet } from 'react-native';
import React from 'react';

import Home from '../../components/home'


export default function HomeScreen() {
  return (
    <View style={styles.container}> 
    <Home />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#D1CCF3',
  },
  title:{
      fontSize: 24,
      fontWeight: 'bold',
      color: '#0000',
      marginBottom: 20,
  },
  button: {
      backgroundColor: '#FFF',
      padding: 10,
      borderRadius: 5,
  },

  buttonText: {
      color:'#FFFF',
      fontSize: 16,
  },
});