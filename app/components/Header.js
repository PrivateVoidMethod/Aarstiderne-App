
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            title: props.title,
        };
      }

    render() {
        return (
            <View style={{ paddingTop: 15, paddingBottom: 15, backgroundColor: 'green' }}>
            <Text style={{ marginLeft: 10, color: "white", fontSize: 20 }}>{this.state.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
});


