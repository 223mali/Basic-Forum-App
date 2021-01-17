import React, { useEffect, useState } from "react";
import { StyleSheet, Platform, StatusBar, SafeAreaView } from "react-native";
import { Provider as PaperProvider } from 'react-native-paper';
// import LoginPage from "./src/pages/login/login.page";
import Main from './src/main/main'

export default function App() {
  
  return (
    <PaperProvider>
      <Main />
  </PaperProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // backgroundColor:'red',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 

  },
  login:{
    backgroundColor:'orange',
    display:'flex'
  }
});
