import React, { useState } from "react";
import {
  View,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  Alert,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Card, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import StarRating from "react-native-star-rating-widget";

const { width } = Dimensions.get("window");
const height = (width * 100) / 100;

const ProductSliderList = () => {
  const data = [
    {
      id: 1,
      image: require("../../../assets/images/felthat.png"),
      title: "Felt Hat",
      description: "This is the first image.",
      rate: 4,
      count: 18,
    },
    {
      id: 2,
      image: require("../../../assets/images/tie.png"),
      title: "School Tie",
      description: "This is the second image.",
      rate: 4,
      count: 18,
    },
    {
      id: 3,
      image: require("../../../assets/images/image.png"),
      title: "School Crest",
      description: "This is the third image.",
      rate: 4,
      count: 18,
    },
    {
      id: 4,
      image: require("../../../assets/images/image.png"),
      title: "School Uniform",
      description: "This is the fourth image.",
      rate: 4,
      count: 18,
    },
    {
      id: 5,
      image: require("../../../assets/images/image.png"),
      title: "Image 5",
      description: "This is the fifth image.",
      rate: 4,
      count: 18,
    },
  ];
  const [rating, setRating] = useState(data.rate);
  const navigation = useNavigation();

  const renderCard = ({ item }: any) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("ProductDetails" as never)}
      >
        <Card
          style={{
            width: width * 0.7,
            height,
            marginHorizontal: 10,
            marginVertical: 10,
          }}
        >
          <Card.Cover
            source={item.image}
            resizeMode="cover"
            style={{ width: width * 0.7, height: height * 0.5 }}
          />
          <View
            style={{
              flexDirection: "row",
              position: "absolute",
              top: -7,
              left: 10,
            }}
          >
            <Image
              source={require("../../../assets/images/hot-tag.png")}
              resizeMode="contain"
              style={{ width: 50 }}
            />
          </View>
          <Card.Content style={{ width: width * 0.7, height: height * 0.5 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 10,
              }}
            >
              <Text variant="labelLarge" style={{ fontSize: 20 }}>
                {item.title}
              </Text>
              <Text variant="labelLarge" style={{ fontSize: 20 }}>
                Le 99.99
              </Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <StarRating
                rating={rating}
                onChange={setRating}
                color="#A83542"
                starSize={25}
                style={{ marginVertical: 10 }}
              />
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                ({item.count})
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => Alert.alert("Thank you for buying")}
              style={{
                backgroundColor: "#A83542",
                width: 120,
                padding: 12,
                borderRadius: 100,
                alignItems: "center",
              }}
            >
              <Text
                variant="labelLarge"
                style={{ color: "#fff", fontSize: 18 }}
              >
                Buy Now
              </Text>
            </TouchableOpacity>
          </Card.Content>
        </Card>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderCard}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default ProductSliderList;
