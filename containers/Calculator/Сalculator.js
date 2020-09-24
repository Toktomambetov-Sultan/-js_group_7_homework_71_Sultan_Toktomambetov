import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, SafeAreaView, View} from "react-native";
import GetCalculateUnits from "../../classes/Сalculator";
import CButton from "../../components/CButton/CButton";
import styles from "./СalculatorStyles";
const Сalculator = () => {
  const [display, setDisplay] = useState("");
  const chars = GetCalculateUnits(display);
  return (
    <SafeAreaView style={styles.App}>
      <Text style={styles.display}>{display}</Text>
      <View style={styles.buttonsBlock}>
        {chars.map((char) => (
          <CButton char={char} key={char.get()} setDisplay={setDisplay} />
        ))}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Сalculator;
