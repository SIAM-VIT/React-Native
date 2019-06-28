import React from "react";
import { Text, Image } from "react-native";
import Card from "./Card";
const AlbumDetail = props => {
  return (
    <Card>
      <Text>{props.record.title}</Text>
    </Card>
  );
};

export default AlbumDetail;
