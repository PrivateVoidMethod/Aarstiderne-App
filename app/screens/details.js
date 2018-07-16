import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ScrollView, Animated, ListView } from 'react-native';
import detailsStore from '../store/detailsStore'
import { observer } from 'mobx-react/native'
import Header from '../components/Header'


const windowWidth = Dimensions.get("window").widths;
const windowHeight = Dimensions.get("window").height;

const IMAGE_HEIGHT = 220;

@observer
export default class details extends Component {

  scrollAnimatedValue = new Animated.Value(0);

  componentWillMount() {
    const { state } = this.props.navigation;
    detailsStore.FetchDetails(state.params.Details)
  }


  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    if (detailsStore.loading == true) {
      return <View><Text>Loading...</Text></View>
    }
    return (
      <View style={styles.container}>
        <Animated.Image source={{ uri: detailsStore.item.Image }} style={[styles.image, {
          transform: [
            {
              translateY: this.scrollAnimatedValue.interpolate({
                inputRange: [-IMAGE_HEIGHT, 0, IMAGE_HEIGHT],
                outputRange: [IMAGE_HEIGHT / 2, 0, -IMAGE_HEIGHT / 2],
                extrapolateRight: 'clamp',
              })
            },
            {
              scale: this.scrollAnimatedValue.interpolate({
                inputRange: [-IMAGE_HEIGHT, 0],
                outputRange: [2, 1],
                extrapolateRight: 'clamp',
              })
            },
          ],
        }]}>
        </Animated.Image>
        <Header title={"Details"} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{detailsStore.item.Name}</Text>
        </View>
        <Animated.ScrollView
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.scrollAnimatedValue } } }],
            { useNativeDriver: true },
          )}
          contentContainerStyle={styles.scrollViewContentContainer}
          scrollEventThrottle={8}
        >
          <Text style={styles.category}>Beskrivelse</Text>
          <View elevation={5} style={styles.descriptionContainer}>
            <Text style={styles.description}>{detailsStore.item.Description}</Text>
          </View>
          <View style={styles.contentHeaderContainer}>
            <Text style={styles.category}>Indhold</Text>
            <Text style={styles.weekNumberText}>{detailsStore.item.WeekNumber}</Text>
          </View>
          <ListView
            dataSource={ds.cloneWithRows(detailsStore.ingredients)}
            renderRow={(data) =>
              <View elevation={1} style={styles.contentItem}>
                <Text style={styles.contentText}>{data.Name}</Text>
              </View>
            }>
          </ListView>
          <View style={{ marginBottom: 200 }}></View>
        </Animated.ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeecec',
  },
  scrollViewContentContainer: {
    marginTop: IMAGE_HEIGHT - 60,
    backgroundColor: '#eeecec',
    marginBottom: 200
  },
  titleContainer: {
    position: 'absolute', top: 160, left: 0, right: 0,
    height: 60,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    paddingTop: 15
  },
  title: {
    marginLeft: 15,
    color: 'white',
    fontSize: 20,
  },
  image: {
    resizeMode: 'cover',
    position: 'absolute', top: 0, left: 0, right: 0,
    height: IMAGE_HEIGHT,
    alignSelf: 'center',
  },
  category: {
    color: 'green',
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 15,
    fontSize: 17
  },
  descriptionContainer: {
    backgroundColor: 'white',
  },
  description: {
    color: 'black',
    padding: 15,
    fontSize: 17
  },
  contentHeaderContainer: {
    flexDirection: 'row'
  },
  weekNumberText: {
    color: 'grey',
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 15,
    fontSize: 17,
    position: "absolute",
    right: 0,
    marginRight: 15
  },
  contentItem: {
    flex: 1,
    borderBottomWidth: 0.2,
    borderBottomColor: 'lightgrey',
    backgroundColor: 'white',

  },
  contentText: {
    color: 'black',
    padding: 15,
    fontSize: 17
  }

});
