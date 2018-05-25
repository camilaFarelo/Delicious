import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TextInput,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from 'react-navigation';
import DefaultInputs from '../Components/DefaultInputs';
import TodayPage from '../Components/TodayPage';
import RecipesPage from '../Components/RecipesPage';
import ShoppingPage from '../Components/ShoppingPage';
import SettingPage from '../Components/SettingPage';

const { width, height } = Dimensions.get('window');

export default createBottomTabNavigator({
  Today: TodayPage,
  Recipes: RecipesPage,
  Shopping: ShoppingPage,
  Setting: SettingPage,
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Today') {
          iconName = 'calendar';
        } else if (routeName === 'Recipes') {
          iconName = 'utensils';
        } else if (routeName === 'Shopping') {
          iconName = 'list-ol';
        } else if (routeName === 'Setting') {
          iconName = 'cog';
        }
        return <Icon name={iconName} size={15} color={tintColor} />;
      },
    tabBarOptions: {
      activeTintColor: '#F8B601',
      inactiveTintColor: '#57789D',
      labelStyle: {
        fontSize: 14,
        fontFamily: 'SourceSansPro-Bold',
        marginBottom: 8,
      },
      style: {
        backgroundColor: '#0B1723',
        height: 60,
      }
    },
  })
});
