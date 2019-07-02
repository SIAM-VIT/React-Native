// Import libraries for making a component
import React from "react";
import { Text, View } from "react-native";

// Make a component
const Header = props => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 60, //pixel
    // paddingTop: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    elevation: 2,
    position: "relative",
    fontStyle: "bold"
  },
  textStyle: {
    fontSize: 20
  }
};

// Make the component available to other parts of the app.
export {Header};
