import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { observer } from 'mobx-react/native'
import boxesStore from '../store/boxesStore'
import Header  from '../components/Header'

@observer
export default class boxes extends Component {
  render() {
    return (
      <View >
      <Header title={"Kasser"} />
        <Text>Boxes</Text>
         {boxesStore.loading &&
        <Text>LOADING ....</Text>
          }
      </View>
    );
  }
}