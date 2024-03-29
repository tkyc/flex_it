import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import EnergyExpenditureScreen from '../screens/EnergyExpenditureScreen';
import BMIScreen from '../screens/BMIScreen';
import BiometricsScreen from '../screens/BiometricsScreen';

export default BiometricsStack = createStackNavigator({
	Biometrics: {
		screen: BiometricsScreen
	},
    EnergyExpenditure: {
        screen: EnergyExpenditureScreen
    },
    BMI: {
        screen: BMIScreen
    }
}, {
    navigationOptions: ({navigation}) => {
        return {
            tabBarLabel: "Biometrics"
        }
    }
});

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  title: 'asdf',
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

// export default createBottomTabNavigator({
//   HomeStack,
//   LinksStack,
//   SettingsStack,
//   BiometricsStack
// });
