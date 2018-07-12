import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView, Dimensions } from 'react-native';
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

    let boxes = boxesStore.boxes.map((category) => {
      category.Products.map((product) => {
        return <Text>{product.Name}</Text>
      })

    })
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
          style={{marginBottom: 10}}
          dataSource={ds.cloneWithRows(boxesStore.boxes)}
          renderRow={(data) =>
            <View>
              <Text style={{ color: "green", marginLeft: 5 }}>{data.Name}</Text>
              {data.Products.map(function (product) {
                return (
                <BoxListItem data={product}/>
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
  }
});