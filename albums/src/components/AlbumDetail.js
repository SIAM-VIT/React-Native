import React from "react";
import { View, Text, Image } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";

const AlbumDetail = ({ record }) => {
  const { title, artist, thumbnail_image } = record;
  const { thumbnailStyle, headerContentStyle } = styles;

  return (
    <Card>
      <CardSection>
        <View>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  }
};

export default AlbumDetail;
