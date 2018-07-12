import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header  from '../components/Header'

export default class mySite extends Component {
  render() {
    return (
      <View>
       <Header title={"Min Side"} />
        <Text>my site</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});