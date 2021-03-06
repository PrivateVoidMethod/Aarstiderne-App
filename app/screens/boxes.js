import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView, Dimensions, TouchableHighlight } from 'react-native';
import { observer } from 'mobx-react/native'
import boxesStore from '../store/boxesStore'
import Header from '../components/Header'
import BoxListItem from '../components/BoxListItem'

const windowHeight = Dimensions.get("window").height;

@observer
export default class boxes extends Component {

  componentWillMount() {
    boxesStore.FetchBoxes();
  }

  render() {

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    return (
      <View style={styles.container}>
        <Header title={"Kasser"} />

        {boxesStore.loading &&
          <Text>LOADING ....</Text>
        }

        {boxesStore.error &&
          <Text>There was an error</Text>
        }

        <ListView
          style={styles.boxesList}
          dataSource={ds.cloneWithRows(boxesStore.boxes)}
          renderRow={(data) =>
            <View>
              <Text style={styles.category}>{data.Name}</Text>
              {data.Products.map(function (product) {
                return (
                  <BoxListItem key={product.Id} data={product} />
                )
              })}
            </View>

          }>
        </ListView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: windowHeight
  },
  category: {
    color: "green",
    marginLeft: 5
  },
  boxesList: {
    marginBottom: 10
  }
});