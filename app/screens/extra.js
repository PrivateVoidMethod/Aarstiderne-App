import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header  from '../components/Header'


export default class extra extends Component {
  render() {
    return (
      <View>
       <Header title={"Extra"} />
        <Text>extra</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});