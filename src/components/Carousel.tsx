import React from "react";
import { View, Image } from "react-native";
import Carousel from "react-native-snap-carousel";
import { sliderWidth, itemWidth } from "../styles/SliderEntry.style";

const _renderItem = ({ item }) => {
  return (
    <View>
      <Image
        style={{
          width: "100%",
          height: "150px",
          resizeMode: "cover",
          borderRadius: 15,
        }}
        source={item.illustration}
      />
    </View>
  );
};

const ImageCarousel = ({ data }) => {
  return (
    <Carousel
      data={data}
      renderItem={_renderItem}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      inactiveSlideScale={0.8}
      activeSlideAlignment={"start"}
      loop={true}
    />
  );
};

export default ImageCarousel;
