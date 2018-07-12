
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';


const windowWidth = Dimensions.get("window").widths;
const windowHeight = Dimensions.get("window").height;

export default class BoxListItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: props.data,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{ width: 75, height: 75, margin: 5 }}
                    source={{ uri: this.state.data.Image }}
                />
                <View style={styles.containerBorder}>
                <Text style={{marginTop: 15, fontSize: 15, fontWeight: "bold"}}>
                {this.state.data.Name}{"\n"}
                <Text style={{fontSize: 12, fontWeight: "normal"}}>
                {this.state.data.SubTitle}
                </Text>
                </Text> 
                <View style={{position: "absolute", bottom: 0, right: 0}}>
                  <Text style={{fontSize: 15, color: 'green', fontWeight: "bold"}}>{this.state.data.Price}</Text>
              </View>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        width: windowWidth,
        height: 80
    },

    containerBorder: {
        flex:1,
        borderBottomWidth: 0.2,
        borderBottomColor: 'lightgrey'
    },

    flexCenterBottom: {
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "flex-end",
    }
});


