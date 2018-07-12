import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react/native'
import boxesStore from '../store/boxesStore'
import Header from '../components/Header'

@observer
export default class boxes extends Component {

  componentWillMount() {
    boxesStore.FetchBoxes();
  }

  render() {

    let boxes =  boxesStore.boxes.map((category) => {
      category.Products.map((product) => {
        return <Text>{product.Name}</Text>
      })
      
    })
      

    return (
      <View >
        <Header title={"Kasser"} />
        <Text>Boxes</Text>
        {boxesStore.loading &&
          <Text>LOADING ....</Text>
        }

        {boxesStore.error &&
          <Text>There was an error</Text>
        }

      {boxesStore.boxes.map(function (category) {
            return (
              <View>
                <Text style={{color: "red"}}>{category.Name}</Text>
                {category.Products.map(function (product) {
                  return (
                    <View>
                    <Text>{product.Name}</Text>
                    <Text>{product.SubTitle}</Text>
                     <Text>{product.Price}</Text> 
                     </View>
                  );
                })}
              </View>
            );
          })}
     
      </View>
    );
  }
}