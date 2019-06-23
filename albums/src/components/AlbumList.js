import React, { Component } from "react";
import { View, Text } from "react-native";
import axios from "axios";

// Class Component
class AlbumList extends Component {
  componentWillMount() {
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log("Error is ", err);
      });
  }

  render() {
    return (
      <View>
        <Text>Album List !!!!</Text>
      </View>
    );
  }
}

export default AlbumList;
