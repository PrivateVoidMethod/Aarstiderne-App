import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header'

export default class news extends Component {
  render() {
    return (
      <View>
        <Header title={"Netop nu"} />
        <Text>news</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});