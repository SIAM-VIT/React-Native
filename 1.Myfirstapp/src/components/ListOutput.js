import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

const ListOutput = props => {
  return (
    <ScrollView style={styles.OutputContainer}>
      <View style={styles.ListContainer}>{props.placesOutput}</View>
    </ScrollView>
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
