import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";
import CalculateUnit from "./classes/Char";
import FormatDisplay from "./classes/FormatDisplay";

export default function App() {
  const [display, setDisplay] = useState("");
  CalculateUnit.display = display;
  const format = new FormatDisplay(display);
  format.get();
  const chars = [
    new CalculateUnit("AC", { func: (display) => "" }),
    new CalculateUnit("<", {
      func: (display) => {
        return display.slice(0, -1);
      },
      disabled: !display,
    }),
    new CalculateUnit("%", {
      callback: () => {
        console.log(format.numbers[1]);
        if (format.numbers.length === 1) {
          format.numbers[0] /= 100;
        } else {
          format.numbers[1] = format.numbers[0] * format.numbers[1] * 0.01;
        }
      },
      func: (display) => format.get(),
    }),
    new CalculateUnit("/", {
      func: (display) => display + "/",
      disabled: format.numbers.length >= 2,
    }),
    new CalculateUnit("7"),
    new CalculateUnit("8"),
    new CalculateUnit("9"),
    new CalculateUnit("x", {
      func: (display) => display + "*",
      disabled: format.numbers.length >= 2,
    }),
    new CalculateUnit("4"),
    new CalculateUnit("5"),
    new CalculateUnit("6"),
    new CalculateUnit("-", {
      func: (display) => display + "-",
      disabled: format.numbers.length >= 2,
    }),
    new CalculateUnit("1"),
    new CalculateUnit("2"),
    new CalculateUnit("3"),
    new CalculateUnit("+", {
      func: (display) => display + "+",
      disabled: format.operations.length >= 2,
    }),
    new CalculateUnit("00", {
      disabled: format.operations[format.operations.length - 1] === "/",
    }),
    new CalculateUnit("0", {
      disabled: format.operations[format.operations.length - 1] === "/",
    }),
    new CalculateUnit(".", {
      func: (display) => display + ".",
      disabled:
        String(format.numbers[format.numbers.length - 1]).indexOf(".") !== -1,
    }),
    new CalculateUnit("=", {
      func: (display) => String(eval(display)),
      callback: format.update,
      disabled:
        !isNaN(+display) ||
        isNaN(+display[display.length - 1]) ||
        isNaN(+display[0]),
    }),
  ];
  return (
    <SafeAreaView style={styles.App}>
      <Text style={styles.display}>{display}</Text>
      <View style={styles.buttonsBlock}>
        {chars.map((char) => (
          <TouchableOpacity
            disabled={char.disabled}
            onPress={() => setDisplay(char.func)}
            style={styles.button}
            key={char.get()}
          >
            <Text style={styles.buttonInner}>{char.get()}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 0 : 25,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  display: {
    width: "100%",
    fontSize: 26,
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonsBlock: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 10,
  },
  button: {
    width: "25%",
    padding: 5,
    borderRadius: 10,
  },
  buttonInner: {
    borderWidth: 1,
    paddingVertical: 5,
    textAlign: "center",
    fontSize: 28,
  },
});
