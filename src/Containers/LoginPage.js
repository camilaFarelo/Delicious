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
import DefaultInputs from '../Components/DefaultInputs';

const { width, height } = Dimensions.get('window');
export default class App extends Component<Props> {
  state = {
    loginText: '',
    password: '',
  };
  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <ImageBackground
          style={styles.mainContainer}
          source={require('../assets/images/bg.png')}>
          <View style={styles.textContainer}>
            <Text style={styles.mainTitle}>Delicious</Text>
          </View>
          <View style={styles.inputContainer}>
            <DefaultInputs value={this.state.loginText} placeholder='Login'/>
            <DefaultInputs value={this.state.password} placeholder='Password'/>
            <TouchableOpacity style={[styles.signInButton, styles.button]}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.facebookButton, styles.button]}>
              <Text style={styles.buttonText}>Facebook</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: width,
    height: height,
    flexDirection: "column",
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14,
    borderRadius: 6,
  },
  signInButton: {
    backgroundColor: '#F8B601',
  },
  facebookButton: {
    marginTop: 20,
    backgroundColor: '#4266b2',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'SourceSansPro-Bold',
  },
  mainTitle: {
    color: "white",
    fontFamily: "Damion",
    fontSize: 64,
    paddingTop: 250,
  }
});
