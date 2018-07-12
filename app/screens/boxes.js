import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { observer } from 'mobx-react/native'
import boxesStore from '../store/boxesStore'

@observer
export default class boxes extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Boxes</Text>
         {boxesStore.loading &&
        <Text>LOADING ....</Text>
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});