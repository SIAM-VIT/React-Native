import React from "react";
import { View } from "react-native";

const CardSection = props => {
  return <View style={style.containerStyle}>{props.children}</View>;
};

const style = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "flex-start",
    borderColor: "#ddd",
    position: "relative"
  }
};
export default CardSection;
