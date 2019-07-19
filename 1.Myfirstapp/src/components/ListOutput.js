import React from "react";
import { View, StyleSheet, Touchable } from "react-native";

const ListOutput = props => {
  return (
    <View style={styles.OutputContainer}>
      <View style={styles.ListContainer}>{props.placesOutput}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  ListContainer: {
    width: "100%"
  },
  OutputContainer: {
    width: "100%",
    paddingBottom: 10
  }
});

export default ListOutput;
