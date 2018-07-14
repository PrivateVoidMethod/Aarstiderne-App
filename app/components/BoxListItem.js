
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';

const windowWidth = Dimensions.get("window").widths;
const windowHeight = Dimensions.get("window").height;

class BoxListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            navigation: props.navigation
        };
    }

    render() {
        return (
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Details', { Details: this.state.data.Details })}>
                <View style={styles.container}>
                    <Image
                        style={styles.image}
                        source={{ uri: this.state.data.Image }}
                    />
                    <View style={styles.containerBorder}>
                        <Text style={styles.title}>
                            {this.state.data.Name}{"\n"}
                            <Text style={styles.subtitle}>
                                {this.state.data.SubTitle}
                            </Text>
                        </Text>
                        <View style={styles.priceContainer}>
                            <Text style={styles.price}>{this.state.data.Price}</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
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
        flex: 1,
        borderBottomWidth: 0.2,
        borderBottomColor: 'lightgrey'
    },
    image: {
        width: 75,
        height: 75,
        margin: 5
    },
    title: {
        marginTop: 15,
        fontSize: 15,
        fontWeight: "bold"
    },
    subtitle: {
        fontSize: 12,
        fontWeight: "normal"
    },
    priceContainer: {
        position: "absolute",
        bottom: 0,
        right: 0
    },
    price: {
        fontSize: 15,
        color: 'green',
        fontWeight: "bold"
    }
});

export default withNavigation(BoxListItem);


