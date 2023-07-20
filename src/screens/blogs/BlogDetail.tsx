import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import BlogSliderList from "./BlogSliderList";
import ShowMoreText from "../../components/ShowMoreText";

const { width } = Dimensions.get("window");

const BlogDetail = () => {
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ paddingVertical: 10, marginLeft: 20 }}
      >
        <MaterialIcons name="arrow-back-ios" size={30} />
      </TouchableOpacity>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginHorizontal: 10 }}
      >
        <View>
          <Text style={{ fontSize: 40 }}>
            Tips for Building Healthy Relationships at School
          </Text>
          <Text>
            Building healthy relationships with classmates, teachers, ans staff
            menbers contributes to a positive and supportive school environment
          </Text>
        </View>
        <Image
          source={require("../../../assets/images/blogDetail.png")}
          resizeMode="cover"
          style={{ width: "100%" }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: 5,
          }}
        >
          <Text>sport</Text>
          <Text>cipher</Text>
          <Text>education</Text>
          <Text>tag item</Text>
          <View>
            <MaterialCommunityIcons name="share-variant-outline" size={25} />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="heart-outline"
              size={25}
              color={"#A83542"}
            />
            <View
              style={{
                backgroundColor: "#A83542",
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 15,
                marginLeft: 5,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 18,
                }}
              >
                320+k
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 18 }}>
            Building healthy relationships with classmates, teachers, and staff
            members contributes to a positive and supportive school environment.
            When you have positive relationships, you not only feel happier and
            more connected, but you also create a strong support network that
            can enhance your overall educational experience. Here are some
            valuable tips on how to build and nurture healthy relationships at
            school:
          </Text>
          <View>
            <Text style={{ fontSize: 24 }}>
              {"\n "}
              1. Practical Effective Communication
            </Text>
            <Text style={{ fontSize: 18 }}>
              Communication is key to building strong relationships. Be an
              active listener and show genuine interest in what others have to
              say. Practice clear and respectful communication, both in-person
              and through digital channels. Use kind and positive words to
              express yourself, and always be open to feedback and different
              perspectives.
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 24 }}>
              {"\n "}2. Practice Effective Communication
            </Text>
            <Text style={{ fontSize: 18 }}>
              Communication is key to building strong relationships. Be an
              active listener and show genuine interest in what others have to
              say. Practice clear and respectful communication, both in-person
              and through digital channels. Use kind and positive words to
              express yourself, and always be open to feedback and different
              perspectives.
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 24 }}>
              {"\n "}3. Show Kindness and Empathy
            </Text>
            <Text style={{ fontSize: 18 }}>
              Kindness and empathy go a long way in building healthy
              relationships. Treat others with respect and compassion, and be
              mindful of their feelings and experiences. Small acts of kindness,
              such as offering a helping hand or a word of encouragement, can
              make a big difference in fostering positive connections.
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 24 }}>{"\n "}4. Embrace Inclusivity</Text>
            <Text style={{ fontSize: 18 }}>
              Create an inclusive and welcoming environment where everyone feels
              valued and respected. Embrace diversity and appreciate the unique
              qualities and backgrounds of your peers. Celebrate differences and
              actively seek opportunities to learn from one another. By
              fostering inclusivity, you contribute to a harmonious and
              supportive school community.
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 24 }}>
              {"\n "}5. Collaborate and Support Others
            </Text>

            <Text style={{ fontSize: 18 }}>
              Collaboration and support are essential for building strong
              relationships. Participate in group projects, extracurricular
              activities, and team-based initiatives. Offer assistance and
              support to your classmates when needed. By working together
              towards common goals, you build trust and develop meaningful
              connections with others.
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 24 }}>
              {"\n "}6. Resolve Conflicts Respectfully
            </Text>

            <Text style={{ fontSize: 16 }}>
              Conflicts are a natural part of any relationship, but it's
              important to address them in a respectful and constructive manner.
              When conflicts arise, listen to each other's perspectives, find
              common ground, and seek solutions that benefit everyone involved.
              Respectful conflict resolution strengthens relationships and helps
              maintain a positive atmosphere at school.
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 24 }}>
              {"\n "}7. Get Involved in School Activities
            </Text>
            <Text style={{ fontSize: 16 }}>
              Participate in school activities, clubs, and events to connect
              with like-minded individuals who share your interests. Joining
              clubs or sports teams provides opportunities to meet new people
              and develop friendships based on shared passions. Being actively
              involved in the school community enhances your overall sense of
              belonging and fosters positive relationships.
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 16 }}>
              {"\n "}
              Remember, building healthy relationships takes time and effort. Be
              patient, be yourself, and always strive to create a positive and
              inclusive school environment. By following these tips, you'll
              develop meaningful connections that can enrich your educational
              journey and contribute to a thriving school community.
            </Text>

            <Text style={{ fontSize: 24 }}>
              {"\n"}Happy relationship building!
            </Text>
          </View>
        </View>

        <Divider style={{ height: 1, marginVertical: 10 }} />
        <View>
          <Text style={{ fontSize: 20 }}>Author</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../../assets/images/blogs-avatar.png")}
              resizeMode="cover"
              style={{ width: 50, height: 50, borderRadius: 100 }}
            />
            <View style={{ marginLeft: 8 }}>
              <Text style={{ color: "#A83542", fontSize: 18 }}>
                Display Name
              </Text>
              <Text>Subhead</Text>
            </View>
          </View>
        </View>
        <Divider style={{ height: 1, marginVertical: 10 }} />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            backgroundColor: "#FFF8F7",
            marginVertical: 5,
          }}
        >
          <View
            style={{
              backgroundColor: "#765657",
              height: 40,
              width: 10,
              marginRight: 5,
            }}
          ></View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Text style={{ fontSize: 40, marginBottom: 8 }}>10 Comments</Text>
            <View style={{ alignItems: "flex-end", marginRight: 10 }}>
              <MaterialCommunityIcons
                name="dots-vertical"
                size={30}
                color="#000"
              />
            </View>
          </View>
        </View>

        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? "lightgrey" : "#FFF8F7" },
            {
              flex: 1,
              borderColor: "grey",
              borderWidth: 0.5,
              borderRadius: 10,
              marginBottom: 15,
              elevation: 10,
            },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
            }}
          >
            <Image
              source={require("../../../assets/images/blogs-avatar.png")}
              resizeMode="cover"
              style={{ width: 50, height: 50, borderRadius: 100 }}
            />

            <View style={{ marginLeft: 8, paddingVertical: 20 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 18, color: "#A83542" }}>
                  Display Name
                </Text>
                <Text>date</Text>
              </View>
              {/* <Text
      numberOfLines={2}
      style={{
        fontSize: 18,
        lineHeight: 30,
        marginTop: 8,
        width: width * 0.75,
      }}
    ></Text> */}
              <View style={{ width: width * 0.75 }}>
                <ShowMoreText
                  // numOfLines={2}
                  style={{
                    fontSize: 18,
                    lineheight: 30,
                    marginTop: 8,
                    Appwidth: width * 0.75,
                  }}
                  text={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis esse minus ratione illo nulla dolorum sit ab a, rerum omnis."
                  }
                />
              </View>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
              width: width * 0.9,
              marginVertical: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "#A83542",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Reply
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginLeft: 15,
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="heart-outline"
                color={"#A83542"}
                size={30}
              />
              <View
                style={{
                  backgroundColor: "#A83542",
                  borderRadius: 20,
                  justifyContent: "center",
                  marginLeft: 5,
                }}
              >
                <Text
                  style={{
                    paddingHorizontal: 13,
                    paddingVertical: 3,
                    color: "#fff",
                    fontSize: 16,
                    textAlign: "center",
                  }}
                >
                  10
                </Text>
              </View>

              <View style={{ flexDirection: "row", marginLeft: 15 }}>
                <MaterialCommunityIcons
                  name="message-outline"
                  size={25}
                  color="#000"
                />
                <View
                  style={{
                    backgroundColor: "#A83542",
                    borderRadius: 20,
                    justifyContent: "center",
                    marginLeft: 8,
                  }}
                >
                  <Text
                    style={{
                      paddingHorizontal: 13,
                      paddingVertical: 3,
                      color: "#fff",
                      fontSize: 16,
                    }}
                  >
                    2
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </Pressable>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            backgroundColor: "#FFF8F7",
            marginVertical: 5,
          }}
        >
          <View
            style={{
              backgroundColor: "#765657",
              height: 40,
              width: 10,
              marginRight: 5,
            }}
          ></View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Text style={{ fontSize: 40, marginBottom: 8 }}>
              More from this author
            </Text>
            <View style={{ alignItems: "flex-end", marginRight: 10 }}>
              <MaterialCommunityIcons
                name="dots-vertical"
                size={30}
                color="#000"
              />
            </View>
          </View>
        </View>

        <BlogSliderList />
      </ScrollView>
    </>
  );
};

export default BlogDetail;

const styles = StyleSheet.create({});
