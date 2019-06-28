import React from "react";
import { View, Text, Image } from "react-native";

const AlbumDetail = props => {
  return (
    <View>
      <Text>{props.record.title}</Text>
      <Text>{props.record.artist}</Text>
      <Text>{props.record.url}</Text>
      <Image>{props.record.image}</Image>
    </View>
  );
};

export default AlbumDetail;
