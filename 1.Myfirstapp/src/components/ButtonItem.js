import React from "react";
import { Button, View, StyleSheet } from "react-native";

const ButtonInput = props => {
  return (
    <View style={styles.ButtonContainer}>
      <Button
        title="Add"
        style={styles.placeButton}
        onPress={props.placeSubmitHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  placeButton: {
    width: "100%"
  },
  ButtonContainer: {
    width: "30%"
  }
});

export default ButtonInput;
