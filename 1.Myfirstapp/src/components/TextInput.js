import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const TextInputItem = props => {
  return (
    <View style={styles.InputContainer}>
      <TextInput
        placeholder="An Awesome Place ?"
        style={styles.textInputStyle}
        value={props.placeName}
        onChangeText={props.placeNameChangeHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    borderColor: "black",
    borderWidth: 1,
    flex: 1
  },
  InputContainer: {
    width: "70%"
  }
});

export default TextInputItem;
