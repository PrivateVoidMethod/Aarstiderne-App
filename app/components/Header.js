
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
            backNavigation: props.backNavigation,
            navigation: props.navigation
        };
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.backNavigation != null &&
                    <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.goBack()}>
                        <Icon name='ios-arrow-back' style={styles.backButton} />
                    </TouchableOpacity>
                }
                <Text style={styles.title}>{this.state.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: 'green',
        flexDirection: 'row',
    
    },
    title: {
        marginLeft: 10,
        color: "white",
        fontSize: 20
    },
    backButton: {
        paddingLeft: 15, 
        paddingRight: 10,
        fontSize: 28, 
        color: 'white'
    },
});

export default withNavigation(Header);
