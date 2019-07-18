import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default class App extends Component {
  state = {
    placeName: " "
  };

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Hi I am Adhikansh Mittal</Text>
        <TextInput
          style={styles.textInputStyle}
          value={this.state.placeName}
          onChangeText={this.placeNameChangeHandler}
          placeholder="An Awesome Place"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  textInputStyle: {
    width: 300,
    borderColor: "black",
    borderWidth: 1
  }
});
