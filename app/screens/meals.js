import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header  from '../components/Header'

export default class meals extends Component {
  render() {
    return (
      <View>
         <Header title={"Måltider"} />
        <Text>meals</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
});