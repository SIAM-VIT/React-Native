import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import ListItem from "./src/components/ListItem";
import TextInputItem from "./src/components/TextInput";
import ButtonInput from "./src/components/ButtonItem";
import ListOutput from "./src/components/ListOutput";

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
      console.log(this.state.places);
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  };

  render() {
    const placesOutput = this.state.places.map((place, i) => {
      return <ListItem key={i} placeName={place} />;
    });
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInputItem
            placeName={this.state.placeName}
            placeNameChangeHandler={this.placeNameChangeHandler}
          />
          <ButtonInput placeSubmitHandler={this.placeSubmitHandler} />
        </View>
        <ListOutput placesOutput={placesOutput} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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
  }
});
