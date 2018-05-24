import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

export default class RecipesPage extends Component<Props> {
  render() {
    const recipies = [
      {
        title: 'Test',
        img: require("/assets/imges/bitmap.png"),
      },
      {
        title: 'test 2',
        img: require("/assets/imges/bitmap.png"),
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

const styles = StyleSheet.create({
  cardList: {
    flex: 1
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
