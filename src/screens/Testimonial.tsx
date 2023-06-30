import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React, { useState } from "react";
import StarRating from "react-native-star-rating-widget";

const Testimonial = () => {
  const [rating, setRating] = useState(4.5);
  return (
    <ImageBackground
      source={require("../../assets/images/testimonialBackground.png")}
      resizeMode="cover"
      style={{
        width: "100%",
        // height: 200,
        alignItems: "center",
        paddingVertical: 10,
        marginBottom: 20,
      }}
    >
      <Image
        source={require("../../assets/images/avatar.png")}
        resizeMode="cover"
        style={{ width: 100, height: 100, borderRadius: 100 }}
      />

      <View style={{ alignItems: "center", marginTop: 10 }}>
        <StarRating
          rating={rating}
          onChange={(newRating) => setRating(newRating)}
          color="#A83542"
        />
      </View>
      <Text
        style={{
          marginHorizontal: 5,
          fontSize: 18,
          color: "#000",
          marginVertical: 10,
        }}
      >
        Lorem ipsum dolor sit amet consectetur. Adipiscing tellus pretium
        volutpat consectetur vitae tincidunt sapien id vitae. Blandit sapien
        semper pulvinar nec elementum varius. A est amet est in ultrices enim.
        Curabitur volutpat integer sagittis pretium. Arcu ac dui elementum orci
        integer pretium sit non.
      </Text>
    </ImageBackground>
  );
};

export default Testimonial;

const styles = StyleSheet.create({});
