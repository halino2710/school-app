import React, { useState, useRef } from "react";
import { TouchableOpacity, View, ScrollView, Dimensions } from "react-native";
import { Card, Text } from "react-native-paper";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import StarRating from "react-native-star-rating-widget";

const Content = () => {
  const [rating, setRating] = useState(4.5);
  return (
    <View style={{ paddingTop: 15 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 18 }}>Product name</Text>
        <Text style={{ fontSize: 18 }}>Le 99.99</Text>
      </View>
      <Text style={{ marginBottom: 5 }}>Category</Text>

      <View style={{ flexDirection: "row", marginLeft: -5, marginVertical: 5 }}>
        <StarRating
          rating={rating}
          onChange={(newRating) => setRating(newRating)}
          color="#A83542"
          starSize={20}
        />
        <Text style={{ fontWeight: "bold" }}>(18)</Text>
      </View>
      <TouchableOpacity
        style={{
          width: 140,
          height: 45,
          backgroundColor: "#A83542",
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff" }}>Buy now</Text>
      </TouchableOpacity>
    </View>
  );
};

const data = [
  {
    id: 1,
    source: require("../../../assets/images/bowTie.jpg"),
    content: <Content />,
  },
  {
    id: 2,
    source: require("../../../assets/images/bag.jpg"),
    content: <Content />,
  },
  {
    id: 3,
    source: require("../../../assets/images/sticker.jpg"),
    content: <Content />,
  },
];

const ProductCarouselHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleNext = () => {
    if (scrollViewRef.current && currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
      scrollViewRef.current.scrollTo({
        x: (currentIndex + 1) * width,
        animated: true,
      });
    }
  };

  const handlePrevious = () => {
    if (scrollViewRef.current && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollViewRef.current.scrollTo({
        x: (currentIndex - 1) * width,
        animated: true,
      });
    }
  };

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);
    setCurrentIndex(index);
  };

  const { width } = Dimensions.get("window");
  const cardStyles = {
    width,
    paddingHorizontal: 10,
  };

  return (
    <View style={{ paddingVertical: 12, backgroundColor: "#fff" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 15,
          marginHorizontal: 25,
          paddingBottom: 10,
          width: "85%",
        }}
      >
        <View
          style={{
            backgroundColor: "#765657",
            height: 70,
            width: 10,
            marginRight: 5,
          }}
        ></View>
        <View>
          <Text
            style={{
              color: "#201A1A",
              fontSize: 20,
              marginBottom: 10,
            }}
          >
            Shop Now from Or Online Store!
          </Text>
          <Text style={{ fontSize: 15, color: "#201A1A" }}>
            Every Item in our inventory is available for sale here. Buy now from
            anywhere and at anytime. Enjoy!
          </Text>
        </View>
      </View>

      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {data.map(({ id, source, content }) => (
          <Card key={id} style={cardStyles}>
            <Card.Cover source={source} resizeMode="cover" />
            <Card.Content>{content}</Card.Content>
          </Card>
        ))}
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 15,
          marginHorizontal: 50,
        }}
      >
        <TouchableOpacity style={{}} onPress={handlePrevious}>
          <Ionicons name="md-caret-back" size={24} color="black" />
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {data.map((_, index) => (
            <View
              style={{
                width: 15,
                height: 15,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "grey",
                marginHorizontal: 5,
              }}
            >
              <View
                key={index}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 4,
                  backgroundColor: index === currentIndex ? "black" : "#fff",
                }}
              />
            </View>
          ))}
        </View>
        <TouchableOpacity style={{}} onPress={handleNext}>
          <Ionicons name="md-caret-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCarouselHome;
