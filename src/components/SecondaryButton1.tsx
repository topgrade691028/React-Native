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
    width: "46%",
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    boxshadow: "0px 3px 40px 0px #DBDBDB",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: "#3F3D56",
    fontSize: 14,
  },
});

export default SecondaryButton;
