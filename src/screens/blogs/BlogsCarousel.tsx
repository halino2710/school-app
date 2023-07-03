import React, { useState, useRef } from "react";
import {
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
  StyleSheet,
  Image,
} from "react-native";
import { Card, Text } from "react-native-paper";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const BlogsCarousel = ({ navigation }: any) => {
  const data = [
    {
      id: 1,
      source: require("../../../assets/images/blog-image1.png"),
    },
    {
      id: 2,
      source: require("../../../assets/images/blog-image2.png"),
    },
    {
      id: 3,
      source: require("../../../assets/images/blog-image3.png"),
    },
  ];
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
    marginTop: 30,
  };

  return (
    <View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {data.map(({ id, source }: any) => (
          <Card key={id} style={cardStyles}>
            <Card.Cover source={source} />
            <Card.Content>
              <Text
                variant="titleLarge"
                style={{ marginVertical: 10, fontSize: 25 }}
              >
                <View
                  style={{
                    marginVertical: 10,
                    backgroundColor: "#FFF8F7",
                    width: "100%",
                    alignItems: "flex-start",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      marginHorizontal: 5,
                    }}
                  >
                    <View style={{ flexDirection: "row", marginRight: 120 }}>
                      <Text style={{ fontSize: 16, marginRight: 5 }}>
                        tag item
                      </Text>
                      <Text style={{ fontSize: 16, marginRight: 5 }}>
                        tag item
                      </Text>
                      <Text style={{ fontSize: 16 }}>tag item</Text>
                    </View>
                    <View style={{}}>
                      <MaterialIcons name="share" size={25} color={"#000"} />
                    </View>
                  </View>

                  <View style={{ marginHorizontal: 5 }}>
                    <Text style={{ fontSize: 20, marginBottom: 15 }}>
                      BlogTtile
                    </Text>
                    <Text style={{}}>
                      Learn more about this bizarre object that has ‘broken the
                      law’ and got Scientists confused
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginVertical: 12,
                    }}
                  >
                    <Image
                      source={require("../../../assets/images/blogs-avatar.png")}
                      resizeMode="cover"
                      style={{ width: 50, height: 50, borderRadius: 50 }}
                    />

                    <View style={{ marginLeft: 10 }}>
                      <Text style={{ fontSize: 18, color: "#AD414D" }}>
                        Display name
                      </Text>
                      <Text>Subhead</Text>
                    </View>
                    <Text style={{ marginLeft: 70, fontSize: 16 }}>
                      12th April, 2023
                    </Text>
                  </View>
                </View>
              </Text>
            </Card.Content>
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

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          marginTop: 20,
          width: "100%",
          position: "absolute",
        }}
      >
        <TouchableOpacity
          style={{
            top: "20%",
            left: 10,
            zIndex: 1,
          }}
          onPress={handlePrevious}
        >
          <MaterialIcons name="chevron-left" size={45} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            top: "20%",
            left: 5,
            zIndex: 1,
          }}
          onPress={handleNext}
        >
          <MaterialIcons name="chevron-right" size={45} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    // flex: 1,
    height: 400,
    backgroundColor: "#fff",
    paddingBottom: 10,
  },
  imageContainer: {
    width: Dimensions.get("window").width,
    height: "100%",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: -10,
    left: 0,
    right: 0,
  },
  paginationDot: {
    width: 15,
    height: 15,
    borderRadius: 20,
    backgroundColor: "#fff",
    marginHorizontal: 6,
    borderWidth: 1,
    borderColor: "#000",
  },
  activeDot: {
    backgroundColor: "#000",
  },
  previousButton: {
    position: "absolute",
    top: "20%",
    left: 10,
    zIndex: 1,
  },
  nextButton: {
    position: "absolute",
    top: "20%",
    right: 10,
    zIndex: 1,
  },
  buttonText: {
    fontSize: 24,
    color: "#555",
  },
});

export default BlogsCarousel;
