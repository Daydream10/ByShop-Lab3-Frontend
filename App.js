import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

//Redux
import {Provider} from 'react-redux';
import store from './Redux/store';

//navigators
import Main from "./Navigators/Main";

//Screens
import ProductContainer from "./Screens/Products/ProductsContainer";
import Header from "./Shared/Header";

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Header />
        <Main/>
    </NavigationContainer>
    </Provider>
    
  );
}

