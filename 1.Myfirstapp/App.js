import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default class App extends Component {
  state = {
    placeName: "",
    places: []
  };

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  };

  render() {
    const placesOutput = this.state.places.map((place, i) => {
      <Text key={i}>{place}</Text>;
    });
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInputStyle}
            value={this.state.placeName}
            placeholder="An Awesome Place"
            onChangeText={this.placeNameChangeHandler}
          />
          <Button
            title="Add"
            style={styles.placeButton}
            onPress={this.placeSubmitHandler}
          />
        </View>
        <View>{placesOutput}</View>
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
  inputContainer: {
    // flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textInputStyle: {
    borderColor: "black",
    borderWidth: 1,
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});
