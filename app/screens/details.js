import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import detailsStore from '../store/detailsStore'
import { observer } from 'mobx-react/native'
import Header  from '../components/Header'

@observer
export default class details extends Component {

  componentWillMount() {
    const {state} = this.props.navigation;
    detailsStore.FetchDetails(state.params.Details)
  }

  render() {
    return (
      <View>
       <Header title={"Details"} />
       {detailsStore.item != null &&
          <Text>{detailsStore.item.Name}</Text>
        }
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
});