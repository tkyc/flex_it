import React from "react";
import * as Animatable from 'react-native-animatable';
import { Input, Button, Divider, Icon } from 'react-native-elements';
import { StyleSheet, ImageBackground, View, Text, TouchableHighlight } from 'react-native';
import { TouchableWithoutFeedback, TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
    //Screen
    container: {
        flex: 1
    },
    //Icon
    bodyIcon: {
        marginTop: 25,
        marginRight: 15,
        height: 60
    },
    //Input element
    inputContainer: {
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 1)",
        borderRadius: 7,
        backgroundColor : "transparent",
        marginTop: 15,
        marginBottom: 15,
        paddingLeft: 15
    },
    //Input placeholder text colour
    placeholder: {
        color: "rgba(255, 255, 255, 0.3)"
    },
    //Input text color
    inputText: {
        color: "white"
    }
});

const screenBackground = "../assets/images/mountain.jpg";

export default class BiometricsScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: "",
            headerStyle: {
            },
            headerTransparent: true,
            headerTintColor: "white",
            headerTitleStyle: {
                fontWeight: "normal"
            },
            headerRight: (
                <TouchableOpacity style = {styles.bodyIcon}
                                  activeOpacity = {0.3}
                                  onPress = {() => {navigation.navigate("EnergyExpenditure")}}>
                    <Icon size = {styles.bodyIcon.height}
                          name = "ios-body"
                          type = "ionicon"
                          iconStyle = {{color: "rgba(255, 255, 255, 0.3)"}}/>
                </TouchableOpacity>
            )
        }
    }

    constructor(props) {
        super(props);
        this.bodyIconRef = React.createRef();
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <ImageBackground source = {require(screenBackground)} style = {styles.container}>
                <Divider style = {{marginTop: 80, backgroundColor: "transparent"}}/>
            </ImageBackground>
        );
    }
}