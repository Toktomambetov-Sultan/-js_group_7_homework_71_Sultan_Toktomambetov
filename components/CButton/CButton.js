import React from "react";
import styles from "./CButtonStyles";
import { Text, TouchableOpacity } from "react-native";

const CButton = (props) => {
  return (
    <TouchableOpacity
      disabled={props.char.disabled}
      onPress={() => props.setDisplay(props.char.func)}
      style={styles.button}
    >
      <Text style={styles.buttonInner}>{props.char.get()}</Text>
    </TouchableOpacity>
  );
};

export default CButton;
