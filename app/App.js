import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { DefaultNavigator } from "./navigationContainer";

console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
      <DefaultNavigator /> 
    );
  }
} 

const styles = StyleSheet.create({
});
