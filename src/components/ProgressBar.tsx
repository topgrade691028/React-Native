import React from "react";
import * as Progress from "react-native-progress";

const ProgressBar = ({ value, activeColor, color }) => {
  return (
    <Progress.Bar
      progress={value}
      width={170}
      height={4}
      color={activeColor}
      unfilledColor={color}
      borderWidth={0}
    />
  );
};

export default ProgressBar;
