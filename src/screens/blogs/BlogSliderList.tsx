import React from "react";
import {
  View,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Card, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const height = (width * 100) / 100;

const BlogSliderList = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      image: require("../../../assets/images/blogImage1.png"),
      title: "Image 1",
      description: "This is the first image.",
    },
    {
      id: 2,
      image: require("../../../assets/images/blogImage2.png"),
      title: "Image 2",
      description: "This is the second image.",
    },
    {
      id: 3,
      image: require("../../../assets/images/image.png"),
      title: "Image 3",
      description: "This is the third image.",
    },
    {
      id: 4,
      image: require("../../../assets/images/image.png"),
      title: "Image 4",
      description: "This is the fourth image.",
    },
    {
      id: 5,
      image: require("../../../assets/images/image.png"),
      title: "Image 5",
      description: "This is the fifth image.",
    },
  ];

  const renderCard = ({ item }: any) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("BlogDetail" as never)}
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
              top: 150,
              right: 10,
            }}
          >
            <MaterialCommunityIcons
              name="heart-outline"
              color={"#A83542"}
              size={25}
              style={{ marginHorizontal: 5 }}
            />
            <View
              style={{
                backgroundColor: "#A83542",
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  padding: 5,
                  color: "#fff",
                }}
              >
                320+k
              </Text>
            </View>
          </View>
          <Card.Content style={{ width: width * 0.7, height: height * 0.5 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 10,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginRight: 8, fontSize: 15 }}>tag item</Text>
                <Text style={{ marginRight: 8, fontSize: 15 }}>tag item</Text>
                <Text style={{ fontSize: 15 }}>tag item</Text>
              </View>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="share-variant-outline"
                  size={25}
                  color={"#000"}
                  style={{ marginLeft: 10 }}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Blog Title
              </Text>
              <Text numberOfLines={2} style={{ marginVertical: 10 }}>
                those indicate tank clean halfway proper stop dot brain coming
                got firm tell fair simple troops within second train using spin
                fat stick page
              </Text>
            </View>

            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../../assets/images/blogs-avatar.png")}
                resizeMode="cover"
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  marginRight: 10,
                }}
              />
              <View
                style={{
                  width: "80%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View>
                  <Text variant="bodyLarge" style={{ color: "#A83542" }}>
                    Display Name
                  </Text>
                  <Text variant="bodyLarge">Student</Text>
                </View>
                <Text variant="bodyLarge" style={{ marginTop: 25 }}>
                  1st April, 2023
                </Text>
              </View>
            </View>
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

export default BlogSliderList;
