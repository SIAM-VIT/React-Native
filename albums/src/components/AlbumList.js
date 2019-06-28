import React, { Component } from "react";
import { View } from "react-native";
import axios from "axios";
import AlbumDetail from "./AlbumDetail";

// Class Component
class AlbumList extends Component {
  state = { albums: [] };

  renderAlbums() {
    return this.state.albums.map(album => (
      // <Text key={album.title}>{album.title}</Text>
      <AlbumDetail key={album.title} record={album} />
    ));
  }

  componentWillMount() {
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(response => {
        this.setState({ albums: response.data });
      })
      .catch(err => {
        console.log("Error is ", err);
      });
  }

  render() {
    return <View>{this.renderAlbums()}</View>;
  }
}

export default AlbumList;
