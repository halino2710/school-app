import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { Divider, Text } from "react-native-paper";

import EventsHome from "./events/EventsHome";
import AboutUs from "./About-Us";
import BlogsCarousel from "./blogs/BlogDetail";
import SliderCard from "../components/SliderCard";
import ProductCarouselHome from "./products/ProductCarouselHome";
import Testimonial from "./Testimonial";
import ContactUs from "./ContactUs";
import Footer from "../components/Footer";

const WelcomeHome: React.FC = ({ navigation }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScroll = (event: any) => {
    const { y } = event.nativeEvent.contentOffset;
    setIsVisible(y > 0);
  };

  const handlePress = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
    }
  };
  return (
    <>
      <ScrollView
        ref={scrollViewRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={{
          top: StatusBar.currentHeight,
          marginBottom: 10,
        }}
      >
        <View style={{ flex: 4 }}>
          <Image
            source={require("../../assets/images/hero-banner.png")}
            resizeMode="cover"
            style={{ width: "100%", height: 250 }}
          />
        </View>

        <View style={{}}>
          <Text
            style={{
              color: "#40000B",
              textAlign: "center",
              fontSize: 30,
              paddingVertical: 20,
            }}
          >
            Welcome to Lebanese International school
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: 20,
              paddingVertical: 20,
              marginBottom: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("AppDrawer")}
              style={{
                backgroundColor: "#A83542",
                width: 161,
                height: 50,
                borderRadius: 100,
                justifyContent: "center",
              }}
            >
              <Text style={{ textAlign: "center", color: "#fff" }}>
                Get Started Today
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 150,
                height: 50,
                borderRadius: 100,
                justifyContent: "center",
                borderWidth: 1,
              }}
            >
              <Text style={{ textAlign: "center", color: "#A83542" }}>
                Download Brochure
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: "#A83542",
            marginBottom: 0,
            justifyContent: "flex-end",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: 80,
              marginHorizontal: 20,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Text style={{ color: "#fff", fontSize: 18 }}>12k+</Text>
              <Text style={{ color: "#fff", fontSize: 18 }}>Students</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ color: "#fff", fontSize: 18 }}>55</Text>
              <Text style={{ color: "#fff", fontSize: 18 }}>Teachers</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ color: "#fff", fontSize: 18 }}>25</Text>
              <Text style={{ color: "#fff", fontSize: 18 }}>Classrooms</Text>
            </View>
          </View>
        </View>
        <AboutUs />
        <Divider
          style={{
            marginVertical: 10,
            backgroundColor: "#FFDADA",
            paddingVertical: 1,
          }}
        />
        <SliderCard />
        <Divider
          style={{
            marginVertical: 10,
            backgroundColor: "#FFDADA",
            paddingVertical: 1,
          }}
        />
        <EventsHome />
        <Divider
          style={{
            marginVertical: 10,
            backgroundColor: "#FFDADA",
            paddingVertical: 1,
          }}
        />
        <BlogsCarousel />
        <Divider
          style={{
            marginVertical: 10,
            backgroundColor: "#FFDADA",
            paddingVertical: 1,
          }}
        />
        <ProductCarouselHome />
        <Divider
          style={{
            marginVertical: 10,
            backgroundColor: "#FFDADA",
            paddingVertical: 1,
          }}
        />
        <Testimonial />
        <Divider
          style={{
            marginVertical: 10,
            backgroundColor: "#FFDADA",
            paddingVertical: 1,
          }}
        />
        <ContactUs />
        <Footer />
      </ScrollView>

      <View style={styles.container}>
        {isVisible && (
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Back to Top</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default WelcomeHome;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 5,
    right: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
