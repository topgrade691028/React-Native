import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";

const SecondaryButton = ({ title }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    boxshadow: "0px 3px 40px 0px #EF697F99",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: "#EF697F",
    fontSize: 24,
  },
});

export default SecondaryButton;
