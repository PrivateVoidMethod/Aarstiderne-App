import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import NewsScreen from "./screens/news";
import MySiteScreen from "./screens/mySite";
import BoxesScreen from "./screens/boxes"
import ExtraScreen from "./screens/extra"
import MealsScreen from "./screens/meals"
import DetailsScreen from "./screens/details"

import Icon from 'react-native-vector-icons/Ionicons';


const BoxesStack = StackNavigator({
  Boxes: BoxesScreen,
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      gesturesEnabled: false
    }
  }
},

  {
    headerMode: 'none',

  });

BoxesStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  let swipeEnabled = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
    swipeEnabled = false;
  }
  return {
    tabBarVisible,
    swipeEnabled
  };
};

const Tab = TabNavigator({
  News: {
    screen: NewsScreen,
    navigationOptions: {
      title: "Netop nu",
      tabBarIcon: ({ tintColor }) => (<Icon name='ios-star' style={{ color: tintColor, fontSize: 28, width: 25 }} />),
      header: {
        visible: false,
      }
    }
  },
  Boxes: {
    screen: BoxesStack,
    navigationOptions: {
      title: "Kasser",
      tabBarIcon: ({ tintColor }) => (<Icon name='ios-cube' style={{ color: tintColor, fontSize: 28, width: 25 }} />)
    }
  },
  Meals: {
    screen: MealsScreen,
    navigationOptions: {
      title: "Måltider",
      tabBarIcon: ({ tintColor }) => (<Icon name='ios-pizza' style={{ color: tintColor, fontSize: 28, width: 25 }} />)
    }
  },
  Extra: {
    screen: ExtraScreen,
    navigationOptions: {
      title: "Extra",
      tabBarIcon: ({ tintColor }) => (<Icon name='ios-nutrition' style={{ color: tintColor, fontSize: 28, width: 25 }} />)
    }
  },
  MySite: {
    screen: MySiteScreen,
    navigationOptions: {
      title: "Min Side",
      tabBarIcon: ({ tintColor }) => (<Icon name='ios-calendar' style={{ color: tintColor, fontSize: 28, width: 25 }} />)
    }
  },
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      StatusBar: false,
      upperCaseLabel: false,
      showIcon: true,
      indicatorStyle: { backgroundColor: 'transparent' },
      labelStyle: {
        fontSize: 10,
        fontWeight: "bold"
      },
      style: {
        justifyContent: "center",
        height: 55,
        backgroundColor: '#dedede',
      },
      activeTintColor: '#FF1919'

    },
  });

export const DefaultNavigator = () =>
  <View style={{ flex: 1 }}>
    <StatusBar backgroundColor="darkgreen"
      setBarStyle="darkgreen" />
    <Tab />
  </View>
