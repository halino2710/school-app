import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const AboutUs = () => {
  const [selectedHeading, setSelectedHeading] = useState("Background");

  const handleHeadingPress = (heading: React.SetStateAction<string>) => {
    setSelectedHeading(heading);
  };

  return (
    <View style={{ backgroundColor: "#FFFFFF" }}>
      <Image
        source={require("../../assets/images/about-us.png")}
        resizeMode="cover"
        style={{ width: "100%" }}
      />

      <View
        style={{
          marginHorizontal: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 20,
          }}
        >
          <Text
            style={[
              styles.heading,
              selectedHeading === "Background" && styles.selectedHeading,
            ]}
            onPress={() => handleHeadingPress("Background")}
          >
            Background
          </Text>
          <Text
            style={[
              styles.heading,
              selectedHeading === "Mission" && styles.selectedHeading,
            ]}
            onPress={() => handleHeadingPress("Mission")}
          >
            Mission
          </Text>
          <Text
            style={[
              styles.heading,
              selectedHeading === "Vision" && styles.selectedHeading,
            ]}
            onPress={() => handleHeadingPress("Vision")}
          >
            Vision
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          {selectedHeading === "Background" && (
            <Text>
              Background content: Lorem ipsum dolor sit amet consectetur. A elit
              dignissim id nam tortor nunc est. Id lacus at neque at lectus ut
              nibh sed. Et quis in vitae vestibulum in diam ante eu. In cursus
              ac faucibus vitae feugiat. Dignissim et et amet imperdiet libero
              elementum mattis felis. Natoque in nunc magna tristique lorem.
              Morbi quam magna quam at ut mauris proin facilisis aliquet. Ut
              pulvinar pellentesque mattis mauris dictumst felis a faucibus
              dignissim. Aliquam interdum consectetur purus dui viverra dui.
              Ipsum fermentum dolor egestas suspendisse blandit. Amet nunc
              cursus orci aenean euismod porta amet. Facilisi nec nunc ut lectus
              viverra imperdiet eget varius odio. Pulvinar rutrum aliquet
              suspendisse mauris. Et gravida at adipiscing sem. Auctor massa
              ultricies sit sit erat arcu. Consectetur ut eget sit ac tortor
              facilisis. Placerat sed ac volutpat ipsum viverra proin. Ipsum
              fusce risus massa sit tempus purus amet. Arcu at erat ut pharetra
              faucibus etiam a sit. Euismod platea risus massa eros vel a
              posuere vel non. Vel dolor nibh praesent sit vitae est habitasse
              in. Mauris ac at leo gravida aliquam. A sed tempus ac scelerisque
              varius mauris sapien integer in. Suspendisse habitant sit cras
              dictumst in at lobortis sapien condimentum.
            </Text>
          )}
          {selectedHeading === "Mission" && (
            <Text>
              Mission content: Lorem ipsum dolor sit amet consectetur. A elit
              dignissim id nam tortor nunc est. Id lacus at neque at lectus ut
              nibh sed. Et quis in vitae vestibulum in diam ante eu. In cursus
              ac faucibus vitae feugiat. Dignissim et et amet imperdiet libero
              elementum mattis felis. Natoque in nunc magna tristique lorem.
              Morbi quam magna quam at ut mauris proin facilisis aliquet. Ut
              pulvinar pellentesque mattis mauris dictumst felis a faucibus
              dignissim. Aliquam interdum consectetur purus dui viverra dui.
              Ipsum fermentum dolor egestas suspendisse blandit. Amet nunc
              cursus orci aenean euismod porta amet. Facilisi nec nunc ut lectus
              viverra imperdiet eget varius odio. Pulvinar rutrum aliquet
              suspendisse mauris. Et gravida at adipiscing sem. Auctor massa
              ultricies sit sit erat arcu. Consectetur ut eget sit ac tortor
              facilisis. Placerat sed ac volutpat ipsum viverra proin. Ipsum
              fusce risus massa sit tempus purus amet. Arcu at erat ut pharetra
              faucibus etiam a sit. Euismod platea risus massa eros vel a
              posuere vel non. Vel dolor nibh praesent sit vitae est habitasse
              in. Mauris ac at leo gravida aliquam. A sed tempus ac scelerisque
              varius mauris sapien integer in. Suspendisse habitant sit cras
              dictumst in at lobortis sapien condimentum.
            </Text>
          )}
          {selectedHeading === "Vision" && (
            <Text>
              Vision content: Lorem ipsum dolor sit amet consectetur. A elit
              dignissim id nam tortor nunc est. Id lacus at neque at lectus ut
              nibh sed. Et quis in vitae vestibulum in diam ante eu. In cursus
              ac faucibus vitae feugiat. Dignissim et et amet imperdiet libero
              elementum mattis felis. Natoque in nunc magna tristique lorem.
              Morbi quam magna quam at ut mauris proin facilisis aliquet. Ut
              pulvinar pellentesque mattis mauris dictumst felis a faucibus
              dignissim. Aliquam interdum consectetur purus dui viverra dui.
              Ipsum fermentum dolor egestas suspendisse blandit. Amet nunc
              cursus orci aenean euismod porta amet. Facilisi nec nunc ut lectus
              viverra imperdiet eget varius odio. Pulvinar rutrum aliquet
              suspendisse mauris. Et gravida at adipiscing sem. Auctor massa
              ultricies sit sit erat arcu. Consectetur ut eget sit ac tortor
              facilisis. Placerat sed ac volutpat ipsum viverra proin. Ipsum
              fusce risus massa sit tempus purus amet. Arcu at erat ut pharetra
              faucibus etiam a sit. Euismod platea risus massa eros vel a
              posuere vel non. Vel dolor nibh praesent sit vitae est habitasse
              in. Mauris ac at leo gravida aliquam. A sed tempus ac scelerisque
              varius mauris sapien integer in. Suspendisse habitant sit cras
              dictumst in at lobortis sapien condimentum.
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
    paddingBottom: 5,
  },
  selectedHeading: {
    borderBottomColor: "#A83542",
    color: "#A83542",
  },
});

export default AboutUs;
