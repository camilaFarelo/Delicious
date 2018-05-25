import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  Dimensions
} from 'react-native';

export default class RecipesPage extends Component<Props> {
  render() {
    const recipies = [
      {
        title: 'Test',
        img: require("../assets/images/bitmap.png"),
      },
      {
        title: 'test 2',
        img: require("../assets/images/bitmap.png"),
      }
    ];
    return (
      <FlatList
        style={styles.cardList}
        data={recipies}
        keyExtractor={this._keyExtractor}
        renderItem={({ item }) => (
          <ImageBackground source={item.img} style={styles.recipiesCard}>
            <Text>{item.title}</Text>
          </ImageBackground>
        )}
      />
    );
  }
}

_keyExtractor = (item, index) => item.id;

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  cardList: {
    flex: 1,
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
    backgroundColor: '#101F30'
  },
  recipiesCard: {
    borderRadius: 10,
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 20,
    minHeight: 160,
    backgroundColor: "rgba(27, 49, 109, 0.73)",
    justifyContent: "center",
    alignItems: "center"
  },
})
