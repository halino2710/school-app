import React, { useState, useRef } from "react";
import { TouchableOpacity, View, ScrollView, Dimensions } from "react-native";
import { Card, Text } from "react-native-paper";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const Content = () => (
  <Text variant="bodyMedium" style={{ marginBottom: 10 }}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vel cupiditate
    numquam deleniti, blanditiis fugiat minima iusto totam autem magni eaque
    similique veniam nostrum assumenda amet quibusdam, libero dolore officiis?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dignissimos
    magnam unde repudiandae quis necessitatibus aliquam mollitia! Ab quam
    laudantium repellat? Earum magni quae corporis id aspernatur nobis porro!
    Dolorem.
  </Text>
);

const data = [
  {
    id: 1,
    source: require("../../assets/images/lds.png"),
    content: <Content />,
  },
  {
    id: 2,
    source: require("../../assets/images/scout.png"),
    content: <Content />,
  },
];

const SliderCard = () => {
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
    <View style={{ paddingVertical: 15 }}>
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
            <Card.Cover source={source} />
            <Card.Content>
              <Text
                variant="titleLarge"
                style={{ marginVertical: 10, fontSize: 25 }}
              >
                Literary and Debating Society (L&DS)
              </Text>
              {content}
              <TouchableOpacity>
                <Text
                  variant="bodyMedium"
                  style={{ color: "red", fontSize: 18 }}
                >
                  Read More
                </Text>
              </TouchableOpacity>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 15,
        }}
      >
        {data.map((_, index) => (
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
        ))}
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          paddingHorizontal: 20,
          marginTop: 20,
          width: "100%",
          position: "absolute",
          bottom: 0,
        }}
      >
        <TouchableOpacity
          style={{
            position: "absolute",
            left: 10,
            zIndex: 1,
          }}
          onPress={handlePrevious}
        >
          <MaterialIcons name="chevron-left" size={45} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            position: "absolute",
            right: 10,
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

export default SliderCard;
