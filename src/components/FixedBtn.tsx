import React from "react";
import { TouchableOpacity, Image, StyleSheet, View } from "react-native";

const FixedBtn = ({ img, event }) => {
  return (
    <TouchableOpacity style={styles.closeBtnContainer}>
      <View onStartShouldSetResponder={() => event()}>
        <Image style={styles.closeBtn} source={img} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  closeBtn: {
    width: 50,
    height: 50,
    borderRadius: 50,
    boxShadow: "0px 3px 40px 0px #DBDBDB",
  },
  closeBtnContainer: {
    position: "absolute",
    top: 15,
    left: 15,
    zIndex: 10,
  },
});

export default FixedBtn;
