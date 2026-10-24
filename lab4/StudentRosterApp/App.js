import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import StudentRoster from './components/StudentRoster';

export default function App(){
  return(
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F6FA"/>
      <StudentRoster/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F5F6FA'
  },
});