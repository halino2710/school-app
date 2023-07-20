import React, { useRef, useEffect } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const height = (width * 100) / 100;

const images = [
  require("../../../assets/images/image.png"),
  require("../../../assets/images/image.png"),
  require("../../../assets/images/image.png"),
  require("../../../assets/images/image.png"),
  require("../../../assets/images/image.png"),
  require("../../../assets/images/image.png"),
  require("../../../assets/images/image.png"),
];

const BlogSlider = ({}: any) => {
  const navigation = useNavigation();
  const flatlistRef = useRef<FlatList<any>>(null);
  const [activeIndex, setActiveIndex] = React.useState(1);

  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (flatlistRef.current) {
        const newIndex = (activeIndex + 1) % images.length;
        flatlistRef.current.scrollToIndex({ animated: true, index: newIndex });
        setActiveIndex(newIndex);
      }
    }, 3000); // Change this value to control the auto-scroll speed

    return () => clearInterval(autoScroll);
  }, [activeIndex]);

  const handleNext = () => {
    if (flatlistRef.current) {
      const newIndex = (activeIndex + 1) % images.length;
      setActiveIndex(newIndex);
      flatlistRef.current.scrollToIndex({ index: newIndex });
    }
  };

  const handlePrevious = () => {
    if (flatlistRef.current) {
      const newIndex = (activeIndex - 1 + images.length) % images.length;
      setActiveIndex(newIndex);
      flatlistRef.current.scrollToIndex({ index: newIndex });
    }
  };

  const handlePaginationPress = (index: number) => {
    setActiveIndex(index);
    flatlistRef.current?.scrollToIndex({ index });
  };

  const renderItem = ({ item }: { item: any }) => (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("ProductDetails" as never)}
      style={{ width: width * 0.6, height }}
    >
      <ImageBackground
        source={item}
        resizeMode="cover"
        style={{
          width,
          height,
          borderRadius: 10,
          overflow: "hidden",
        }}
      ></ImageBackground>
    </TouchableWithoutFeedback>
  );

  const renderPagination = () => {
    return (
      <View style={styles.paginationContainer}>
        <TouchableOpacity
          style={styles.paginationButton}
          onPress={handlePrevious}
        >
          <Fontisto name={"caret-left"} size={25} color={"#000"} />
        </TouchableOpacity>
        {images.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.paginationItem,
              activeIndex === index && styles.activePaginationItem,
            ]}
            onPress={() => handlePaginationPress(index)}
          >
            <View style={styles.dotContainer}>
              {activeIndex === index && <View style={styles.activeDot} />}
            </View>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.paginationButton} onPress={handleNext}>
          <Fontisto name={"caret-right"} size={25} color={"#000"} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <FlatList
        ref={flatlistRef}
        data={[...images, images[0]]} // Add the first image at the end for looping
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        onMomentumScrollEnd={(event) => {
          const slideSize = event.nativeEvent.layoutMeasurement.width;
          const contentOffset = event.nativeEvent.contentOffset.x;
          const newIndex = Math.round(contentOffset / slideSize);
          setActiveIndex(newIndex);
        }}
        snapToInterval={width}
        decelerationRate="fast"
        initialScrollIndex={1} // Start with the second image for loop
        getItemLayout={(data, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
      />
      {renderPagination()}
    </>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    position: "absolute",
    top: 325,
    left: "10%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  paginationButton: {
    paddingHorizontal: 10,
  },
  paginationItem: {
    paddingHorizontal: 5,
  },
  dotContainer: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#A83542",
  },
  activePaginationItem: {
    paddingHorizontal: 5,
  },
});

export default BlogSlider;
