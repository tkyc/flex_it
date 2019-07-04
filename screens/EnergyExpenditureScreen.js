import React from 'react';
import { Input, Button, Divider } from 'react-native-elements';
import { StyleSheet, ImageBackground, View } from 'react-native';

const styles = StyleSheet.create({
    //Screen
    container: {
        flex: 1
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

export default class EnergyExpenditureScreen extends React.Component {
    static navigationOptions = {
        title: "",
        headerStyle: {
            //TODO
        },
        headerTransparent: true,
        headerTintColor: "white",
        headerTitleStyle: {
            fontWeight: "normal"
        }
    }

    constructor(props) {
        super(props);

        //Values being set from input elements
        this.state = {
            weight: null,
            height: null,
            age: null
        };

        //Reference for weight input
        this.weightRef = React.createRef();
        //Reference for height input
        this.heightRef = React.createRef();
        //Reference for age input
        this.ageRef = React.createRef();
    }

    validateInput = (input, reference) => {
        const pattern = RegExp("^([0-9]{1,3})$|^[0-9]{1,3}\\.[0-9]+$");

        if (!pattern.test(input))
            reference.current.shake();
    }

    validateBodyMetric = (bodyMetric) => {
        const metric = Number.parseFloat(bodyMetric);

        return new Promise((resolve, reject) => {
            if (metric)
                resolve(metric);
            else
                reject("Error: Null body metric.");
        });
    }

    clear = () => {
        this.setState({weight: null});
        this.setState({height: null});
        this.setState({age: null});
    }

    calculateTDEE = () => {
        const metrics = [this.state.weight, this.state.height, this.state.age];
        const references = [this.weightRef, this.heightRef, this.ageRef];

        metrics.map((metric, index) => {
            this.validateBodyMetric(metric).then((res) => {
                return res;
            }).catch((error) => {
                console.log(error);
                references[index].current.shake();
            });
        });

        const isValidMetrics = metrics[0] && metrics[1] && metrics[2];
        const BMR = isValidMetrics ? (10 * metrics[0]) + (6.25 * metrics[1]) - (5 * metrics[2]) + 5 : null;

        console.log(BMR);
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <ImageBackground source = {require(screenBackground)} style = {styles.container}>
                <Divider style = {{marginTop: 80, backgroundColor: "transparent"}}/>

                <Input shake = {true}
                       ref = {this.weightRef}
                       keyboardType = "number-pad" 
                       maxLength={6} 
                       onChangeText={(val) => {this.validateInput(val, this.weightRef); this.setState({weight: val});}}
                       value = {this.state.weight}
                       inputContainerStyle = {styles.inputContainer}
                       placeholderTextColor = {styles.placeholder.color}
                       inputStyle = {styles.inputText}
                       placeholder = "Weight"/>

                <Input shake = {true}
                       ref = {this.heightRef}
                       keyboardType = "number-pad" 
                       maxLength={6} 
                       onChangeText={(val) => {this.validateInput(val, this.heightRef); this.setState({height: val});}}
                       value = {this.state.height}
                       inputContainerStyle = {styles.inputContainer}
                       placeholderTextColor = {styles.placeholder.color}
                       inputStyle = {styles.inputText}
                       placeholder = "Height"/>

                <Input shake = {true}
                       ref = {this.ageRef}
                       keyboardType = "number-pad" 
                       maxLength={6} 
                       onChangeText={(val) => {this.validateInput(val, this.ageRef); this.setState({age: val});}}
                       value = {this.state.age}
                       inputContainerStyle = {styles.inputContainer}
                       placeholderTextColor = {styles.placeholder.color}
                       inputStyle = {styles.inputText}
                       placeholder = "Age"/>

                <Button title = "Calculate" 
                        onPress = {this.calculateTDEE}/>

                <Button title = "Clear"
                        onPress = {this.clear}/>
            </ImageBackground>
        );
    }
}