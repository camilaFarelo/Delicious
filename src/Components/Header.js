import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <StatusBar
           backgroundColor="#0B1723"
           barStyle="light-content"
         />
        <SafeAreaView style={styles.headerContainer}>
          <View style={styles.icon}>
            <Icon name="align-justify" size={24} color="#fff" />
          </View>
          <Text style={styles.headerTitle}>Delicious</Text>
          <View style={[styles.icon, styles.alignEnd]}>
            <Icon name="search" size={24} color="#fff" />
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#0B1723',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    alignContent: 'space-between',
  },
  icon: {
    flex: 1,
  },
  alignEnd: {
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  headerTitle: {
    flex: 1,
    fontFamily: "Damion",
    color: 'white',
    fontSize: 24,
  }
})
