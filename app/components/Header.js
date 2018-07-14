
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
            <View style={styles.container}>
                <Text style={styles.title}>{this.state.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: 'green'
    },
    title: {
        marginLeft: 10,
        color: "white",
        fontSize: 20
    }
});


