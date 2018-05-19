import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DefaultInputs = ({value, placeholder}) => {
  return (
    <View style={styles.inputContainer}>
      <Icon name="user" size={24} color="rgba(255, 255, 255, 0.5468)" />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="white"
        value={value}
        maxLength={30}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 15,
    marginBottom: 20,
    borderBottomColor: 'rgba(255, 255, 255, 0.5468)',
    borderBottomWidth: 2,
    flexDirection: "row",
  },
  input: {
    color: 'white',
    marginLeft: 16,
    fontSize: 24,
    fontFamily: 'SourceSansPro-Light',
  },
});

export default DefaultInputs;
