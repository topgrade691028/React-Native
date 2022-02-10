import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";

const PrimaryButton = ({ title, icon }) => {
  return (
    <TouchableOpacity style={styles.button}>
      {icon ? (
        <Image
          style={styles.btnImg}
          source={require("../assets/images/walking.png")}
        />
      ) : null}
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 25,
    backgroundColor: "#EF697F",
    boxShadow: "0px 5px 20px 0px #EF697F99",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  label: {
    color: "white",
    fontSize: 24,
  },
  btnImg: {
    width: 35,
    height: 35,
    marginRight: 15,
  },
});

export default PrimaryButton;
