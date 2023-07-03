import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Card, Divider, Text } from "react-native-paper";

const BlogsPage = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ paddingTop: 20, marginHorizontal: 10, marginBottom: 10 }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          marginTop: 15,
          marginHorizontal: 20,
          backgroundColor: "#FFF8F7",
          marginBottom: 5,
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
          <Text style={{ fontSize: 30, marginBottom: 8, fontWeight: "bold" }}>
            Latest
          </Text>
          <View style={{ alignItems: "flex-end" }}>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={30}
              color="#000"
            />
          </View>
        </View>
      </View>

      <TouchableOpacity>
        <Card mode="outlined">
          <Card.Cover
            source={require("../../../assets/images/latestMain.png")}
          />
          <Card.Content
            style={{
              flexDirection: "row",
              position: "absolute",
              top: 140,
              right: 5,
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="heart-outline"
                color={"#A83542"}
                size={40}
              />
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: "#A83542",
                paddingHorizontal: 12,
                paddingVertical: 5,
                borderRadius: 15,
                marginLeft: 10,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
                64
              </Text>
            </View>
          </Card.Content>
          <Card.Content>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 18,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginRight: 15, fontSize: 18 }}>outside</Text>
                <Text style={{ marginRight: 15, fontSize: 18 }}>shecipher</Text>
                <Text style={{ fontSize: 18 }}>valley</Text>
              </View>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="share-variant-outline"
                  size={30}
                  color={"#000"}
                />
              </TouchableOpacity>
            </View>

            <View>
              <Text
                numberOfLines={2}
                style={{ fontSize: 18, fontWeight: "bold" }}
              >
                smile being fox start stronger wing wide school radio post
                entire die obtain situation came them child
              </Text>
              <Text numberOfLines={2} style={{ marginVertical: 12 }}>
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
                source={require("../../../assets/images/blogProfile.png")}
                resizeMode="cover"
                style={{
                  width: 60,
                  height: 60,
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
                    Alice Kargbo
                  </Text>
                  <Text variant="bodyLarge">Student</Text>
                </View>
                <Text variant="bodyLarge">1st January, 2023</Text>
              </View>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>

      <View>
        <View
          style={{
            zIndex: 1,
            flexDirection: "row",
            position: "absolute",
            top: 15,
            left: 30,
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="heart-outline"
              color={"#A83542"}
              size={25}
            />
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "#A83542",
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 15,
              marginLeft: 8,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
              164
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginVertical: 10,
            borderWidth: 2,
            borderColor: "lightgrey",
            alignItems: "center",
            height: 180,
            borderRadius: 10,
          }}
        >
          <Image
            source={require("../../../assets/images/latest2.png")}
            resizeMode="cover"
            style={{
              width: 120,
              height: 180,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          />

          <View
            style={{
              flex: 1,
              //   marginHorizontal: 10,
              marginRight: 15,
              padding: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Text style={{ marginRight: 8, fontSize: 18 }}>Sport</Text>
                <Text style={{ marginRight: 8, fontSize: 18 }}>cipher</Text>
                <Text style={{ fontSize: 18 }}>education</Text>
              </View>
              <View style={{ justifyContent: "flex-end" }}>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="share-variant-outline"
                    size={30}
                    color={"#000"}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ width: "100%" }}>
              <Text numberOfLines={1}>
                Almost table new cookies earn door wrong busy swept drink load
                until tobacco eleven
              </Text>
              <Text numberOfLines={2}>
                spin my husband greatly board zero hit happily low neck month
                length family phrase accurate date thou electricity saved draw
                impossible steam term trouble
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Image
                source={require("../../../assets/images/blogProfile.png")}
                resizeMode="cover"
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={{ flex: 1, marginLeft: 5 }}>
                  <Text variant="bodyLarge" style={{ color: "#A83542" }}>
                    Alice Kargbo
                  </Text>
                  <Text variant="bodyLarge">Student</Text>
                </View>
                <Text
                  style={{ flex: 1, alignItems: "flex-end", marginRight: 20 }}
                  variant="bodyLarge"
                >
                  12th January, 2023
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <View
          style={{
            zIndex: 1,
            flexDirection: "row",
            position: "absolute",
            top: 15,
            left: 30,
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="heart-outline"
              color={"#A83542"}
              size={25}
            />
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "#A83542",
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 15,
              marginLeft: 8,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
              194
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginVertical: 10,
            borderWidth: 2,
            borderColor: "lightgrey",
            alignItems: "center",
            height: 180,
            borderRadius: 10,
          }}
        >
          <Image
            source={require("../../../assets/images/latest3.png")}
            resizeMode="cover"
            style={{
              width: 120,
              height: 180,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          />

          <View
            style={{
              flex: 1,
              //   marginHorizontal: 10,
              marginRight: 15,
              padding: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Text style={{ marginRight: 8, fontSize: 18 }}>Sport</Text>
                <Text style={{ marginRight: 8, fontSize: 18 }}>cipher</Text>
                <Text style={{ fontSize: 18 }}>education</Text>
              </View>
              <View style={{ justifyContent: "flex-end" }}>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="share-variant-outline"
                    size={30}
                    color={"#000"}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ width: "100%" }}>
              <Text numberOfLines={1}>
                room meat divide rest felt related flies swept bag tail write
                wise rush unusual wild four remarkable whic
              </Text>
              <Text numberOfLines={2}>
                house settlers milk teeth card plastic warm previous balloon
                else cut national boat means setting anyone stretch section
                wooden sister nest felt shout noise
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Image
                source={require("../../../assets/images/blogProfile.png")}
                resizeMode="cover"
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={{ flex: 1, marginLeft: 5 }}>
                  <Text variant="bodyLarge" style={{ color: "#A83542" }}>
                    Alice Kargbo
                  </Text>
                  <Text variant="bodyLarge">Student</Text>
                </View>
                <Text
                  style={{ flex: 1, alignItems: "flex-end", marginRight: 20 }}
                  variant="bodyLarge"
                >
                  12th January, 2023
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <View
          style={{
            zIndex: 1,
            flexDirection: "row",
            position: "absolute",
            top: 15,
            left: 30,
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="heart-outline"
              color={"#A83542"}
              size={25}
            />
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "#A83542",
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 15,
              marginLeft: 8,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
              184
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginVertical: 10,
            borderWidth: 2,
            borderColor: "lightgrey",
            alignItems: "center",
            height: 180,
            borderRadius: 10,
          }}
        >
          <Image
            source={require("../../../assets/images/latest4.png")}
            resizeMode="cover"
            style={{
              width: 120,
              height: 180,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          />

          <View
            style={{
              flex: 1,
              //   marginHorizontal: 10,
              marginRight: 15,
              padding: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Text style={{ marginRight: 8, fontSize: 18 }}>Sport</Text>
                <Text style={{ marginRight: 8, fontSize: 18 }}>cipher</Text>
                <Text style={{ fontSize: 18 }}>education</Text>
              </View>
              <View style={{ justifyContent: "flex-end" }}>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="share-variant-outline"
                    size={30}
                    color={"#000"}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ width: "100%" }}>
              <Text numberOfLines={2} style={{ marginVertical: 5 }}>
                passage next imagine closer handle tone ability small to stream
                wheat yard bottom morning liquid attempt
              </Text>
              <Text numberOfLines={2}>
                check certain certainly gently smallest loss thou mysterious
                lift suppose met mice tax call hunt mouse unknown table pitch
                leather damage almost fast drove
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Image
                source={require("../../../assets/images/blogProfile.png")}
                resizeMode="cover"
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={{ flex: 1, marginLeft: 5 }}>
                  <Text variant="bodyLarge" style={{ color: "#A83542" }}>
                    Alice Kargbo
                  </Text>
                  <Text variant="bodyLarge">Student</Text>
                </View>
                <Text
                  style={{ flex: 1, alignItems: "flex-end", marginRight: 20 }}
                  variant="bodyLarge"
                >
                  12th January, 2023
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <View
          style={{
            zIndex: 1,
            flexDirection: "row",
            position: "absolute",
            top: 15,
            left: 30,
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="heart-outline"
              color={"#A83542"}
              size={25}
            />
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "#A83542",
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 15,
              marginLeft: 8,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
              184
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginVertical: 10,
            borderWidth: 2,
            borderColor: "lightgrey",
            alignItems: "center",
            height: 180,
            borderRadius: 10,
          }}
        >
          <Image
            source={require("../../../assets/images/latest5.png")}
            resizeMode="cover"
            style={{
              width: 120,
              height: 180,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          />

          <View
            style={{
              flex: 1,
              //   marginHorizontal: 10,
              marginRight: 15,
              padding: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Text style={{ marginRight: 8, fontSize: 18 }}>Sport</Text>
                <Text style={{ marginRight: 8, fontSize: 18 }}>Clicher</Text>
                <Text style={{ fontSize: 18 }}>education</Text>
              </View>
              <View style={{ justifyContent: "flex-end" }}>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="share-variant-outline"
                    size={30}
                    color={"#000"}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ width: "100%" }}>
              <Text numberOfLines={2} style={{ marginVertical: 5 }}>
                unusual pocket belt union river frame rapidly
              </Text>
              <Text numberOfLines={2}>
                powerful hill picture sink struck check black rather add donkey
                collect heading birth tool bark bound hand circus consist guess
                organized arrive unit enemy
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Image
                source={require("../../../assets/images/blogProfile.png")}
                resizeMode="cover"
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={{ flex: 1, marginLeft: 5 }}>
                  <Text variant="bodyLarge" style={{ color: "#A83542" }}>
                    Alice Kargbo
                  </Text>
                  <Text variant="bodyLarge">Student</Text>
                </View>
                <Text
                  style={{ flex: 1, alignItems: "flex-end", marginRight: 20 }}
                  variant="bodyLarge"
                >
                  12th January, 2023
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <View
          style={{
            zIndex: 1,
            flexDirection: "row",
            position: "absolute",
            top: 15,
            left: 30,
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="heart-outline"
              color={"#A83542"}
              size={25}
            />
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "#A83542",
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 15,
              marginLeft: 8,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
              184
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginVertical: 10,
            borderWidth: 2,
            borderColor: "lightgrey",
            alignItems: "center",
            height: 180,
            borderRadius: 10,
          }}
        >
          <Image
            source={require("../../../assets/images/latest6.png")}
            resizeMode="cover"
            style={{
              width: 120,
              height: 180,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          />

          <View
            style={{
              flex: 1,
              //   marginHorizontal: 10,
              marginRight: 15,
              padding: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Text style={{ marginRight: 8, fontSize: 18 }}>Sport</Text>
                <Text style={{ marginRight: 8, fontSize: 18 }}>Clicher</Text>
                <Text style={{ fontSize: 18 }}>education</Text>
              </View>
              <View style={{ justifyContent: "flex-end" }}>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="share-variant-outline"
                    size={30}
                    color={"#000"}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ width: "100%" }}>
              <Text numberOfLines={2} style={{ marginVertical: 5 }}>
                nose poet believed throw mighty cover arrange thrown city tone
                out brass summer popular twice dig
              </Text>
              <Text numberOfLines={2}>
                term gone bottle column pile shout fighting luck unless whenever
                wrong news explore above willing melted century library
                production idea driving interest board grain
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Image
                source={require("../../../assets/images/blogProfile.png")}
                resizeMode="cover"
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={{ flex: 1, marginLeft: 5 }}>
                  <Text variant="bodyLarge" style={{ color: "#A83542" }}>
                    Alice Kargbo
                  </Text>
                  <Text variant="bodyLarge">Student</Text>
                </View>
                <Text
                  style={{ flex: 1, alignItems: "flex-end", marginRight: 20 }}
                  variant="bodyLarge"
                >
                  12th January, 2023
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <Divider
        style={{ backgroundColor: "red", height: 2, marginVertical: 10 }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          marginTop: 15,
          marginHorizontal: 20,
          backgroundColor: "#FFF8F7",
          marginBottom: 5,
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
          <Text style={{ fontSize: 30, marginBottom: 8, fontWeight: "bold" }}>
            Trending
          </Text>
          <View style={{ alignItems: "flex-end" }}>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={30}
              color="#000"
            />
          </View>
        </View>
      </View>

      <TouchableOpacity>
        <Card mode="outlined">
          <Card.Cover
            source={require("../../../assets/images/trendingMain.png")}
          />
          <Card.Content
            style={{
              flexDirection: "row",
              position: "absolute",
              top: 140,
              right: 5,
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="heart-outline"
                color={"#A83542"}
                size={40}
              />
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: "#A83542",
                paddingHorizontal: 12,
                paddingVertical: 5,
                borderRadius: 15,
                marginLeft: 10,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
                34
              </Text>
            </View>
          </Card.Content>
          <Card.Content>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 18,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginRight: 15, fontSize: 18 }}>outside</Text>
                <Text style={{ marginRight: 15, fontSize: 18 }}>shecipher</Text>
                <Text style={{ fontSize: 18 }}>valley</Text>
              </View>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="share-variant-outline"
                  size={30}
                  color={"#000"}
                />
              </TouchableOpacity>
            </View>

            <View>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Anything Dawn Ball Leadther Himself We Refused Arrive Pair Felt
                Sheet
              </Text>
              <Text numberOfLines={2} style={{ marginVertical: 12 }}>
                they setting bear grandmother between dawn paint kill loose dog
                combination price immediately replace bring pen son its captured
                merely hold strip park neighborhood
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
                source={require("../../../assets/images/blogProfile.png")}
                resizeMode="cover"
                style={{
                  width: 60,
                  height: 60,
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
                    Alice Kargbo
                  </Text>
                  <Text variant="bodyLarge">Student</Text>
                </View>
                <Text variant="bodyLarge">1st January, 2023</Text>
              </View>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>

      <View>
        <View
          style={{
            zIndex: 1,
            flexDirection: "row",
            position: "absolute",
            top: 15,
            left: 30,
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="heart-outline"
              color={"#A83542"}
              size={25}
            />
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "#A83542",
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 15,
              marginLeft: 8,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
              69
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginVertical: 10,
            borderWidth: 2,
            borderColor: "lightgrey",
            alignItems: "center",
            height: 180,
            borderRadius: 10,
          }}
        >
          <Image
            source={require("../../../assets/images/trending1.png")}
            resizeMode="cover"
            style={{
              width: 120,
              height: 180,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          />

          <View
            style={{
              flex: 1,
              //   marginHorizontal: 10,
              marginRight: 15,
              padding: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Text style={{ marginRight: 8, fontSize: 18 }}>Sport</Text>
                <Text style={{ marginRight: 8, fontSize: 18 }}>cipher</Text>
                <Text style={{ fontSize: 18 }}>education</Text>
              </View>
              <View style={{ justifyContent: "flex-end" }}>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="share-variant-outline"
                    size={30}
                    color={"#000"}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ width: "100%" }}>
              <Text numberOfLines={1}>
                Almost table new cookies earn door wrong busy swept drink load
                until tobacco eleven
              </Text>
              <Text numberOfLines={2}>
                spin my husband greatly board zero hit happily low neck month
                length family phrase accurate date thou electricity saved draw
                impossible steam term trouble
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Image
                source={require("../../../assets/images/blogProfile.png")}
                resizeMode="cover"
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={{ flex: 1, marginLeft: 5 }}>
                  <Text variant="bodyLarge" style={{ color: "#A83542" }}>
                    Alice Kargbo
                  </Text>
                  <Text variant="bodyLarge">Student</Text>
                </View>
                <Text
                  style={{ flex: 1, alignItems: "flex-end", marginRight: 20 }}
                  variant="bodyLarge"
                >
                  12th January, 2023
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <View
          style={{
            zIndex: 1,
            flexDirection: "row",
            position: "absolute",
            top: 15,
            left: 30,
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="heart-outline"
              color={"#A83542"}
              size={25}
            />
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "#A83542",
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 15,
              marginLeft: 8,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
              134
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginVertical: 10,
            borderWidth: 2,
            borderColor: "lightgrey",
            alignItems: "center",
            height: 180,
            borderRadius: 10,
          }}
        >
          <Image
            source={require("../../../assets/images/trending2.png")}
            resizeMode="cover"
            style={{
              width: 120,
              height: 180,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          />

          <View
            style={{
              flex: 1,
              //   marginHorizontal: 10,
              marginRight: 15,
              padding: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Text style={{ marginRight: 8, fontSize: 18 }}>Sport</Text>
                <Text style={{ marginRight: 8, fontSize: 18 }}>cipher</Text>
                <Text style={{ fontSize: 18 }}>education</Text>
              </View>
              <View style={{ justifyContent: "flex-end" }}>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="share-variant-outline"
                    size={30}
                    color={"#000"}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ width: "100%" }}>
              <Text numberOfLines={1}>
                love fully brother dirty sold interior plane rain rocky branch
                dug equal refused share eventually include price compass
              </Text>
              <Text numberOfLines={2}>
                eaten dark compass free notice invented map given rising bus
                railroad send orbit relationship popular onto equator slave own
                material seeing constantly ourselves swimming summary: eaten
                dark compass free notice invented map given rising bus railroad
                send orbit relationship popular onto equator slave own material
                seeing constantly ourselves swimming
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Image
                source={require("../../../assets/images/blogProfile.png")}
                resizeMode="cover"
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={{ flex: 1, marginLeft: 5 }}>
                  <Text variant="bodyLarge" style={{ color: "#A83542" }}>
                    Alice Kargbo
                  </Text>
                  <Text variant="bodyLarge">Student</Text>
                </View>
                <Text
                  style={{ flex: 1, alignItems: "flex-end", marginRight: 20 }}
                  variant="bodyLarge"
                >
                  12th January, 2023
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <Divider
        style={{ backgroundColor: "red", height: 2, marginVertical: 10 }}
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          marginTop: 15,
          marginHorizontal: 20,
          backgroundColor: "#FFF8F7",
          marginBottom: 5,
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
          <Text
            style={{
              fontSize: 30,
              marginBottom: 10,
              fontWeight: "bold",
              paddingVertical: 10,
            }}
          >
            Editor's Pick
          </Text>
          <View style={{ alignItems: "flex-end" }}>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={30}
              color="#000"
            />
          </View>
        </View>
      </View>

      <TouchableOpacity>
        <Card mode="outlined">
          <Card.Cover
            source={require("../../../assets/images/editorMain.png")}
          />
          <Card.Content
            style={{
              flexDirection: "row",
              position: "absolute",
              top: 140,
              right: 5,
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="heart-outline"
                color={"#A83542"}
                size={40}
              />
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: "#A83542",
                paddingHorizontal: 12,
                paddingVertical: 5,
                borderRadius: 15,
                marginLeft: 10,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
                54
              </Text>
            </View>
          </Card.Content>
          <Card.Content>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 18,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginRight: 15, fontSize: 18 }}>outside</Text>
                <Text style={{ marginRight: 15, fontSize: 18 }}>shecipher</Text>
                <Text style={{ fontSize: 18 }}>valley</Text>
              </View>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="share-variant-outline"
                  size={30}
                  color={"#000"}
                />
              </TouchableOpacity>
            </View>

            <View>
              <Text
                numberOfLines={2}
                style={{ fontSize: 18, fontWeight: "bold" }}
              >
                paint several lucky continued program path ahead country
                directly damage
              </Text>
              <Text numberOfLines={2} style={{ marginVertical: 12 }}>
                cabin come hunt sheep behind sea country recently figure science
                capital cook sold noun vote office higher lake tool shore just
                home wagon layers
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
                source={require("../../../assets/images/blogProfile.png")}
                resizeMode="cover"
                style={{
                  width: 60,
                  height: 60,
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
                    Alice Kargbo
                  </Text>
                  <Text variant="bodyLarge">Student</Text>
                </View>
                <Text variant="bodyLarge">1st January, 2023</Text>
              </View>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>

      <View>
        <View
          style={{
            zIndex: 1,
            flexDirection: "row",
            position: "absolute",
            top: 15,
            left: 30,
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="heart-outline"
              color={"#A83542"}
              size={25}
            />
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "#A83542",
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 15,
              marginLeft: 8,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
              174
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginVertical: 10,
            borderWidth: 2,
            borderColor: "lightgrey",
            alignItems: "center",
            height: 180,
            borderRadius: 10,
          }}
        >
          <Image
            source={require("../../../assets/images/editor1.png")}
            resizeMode="cover"
            style={{
              width: 120,
              height: 180,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          />

          <View
            style={{
              flex: 1,
              //   marginHorizontal: 10,
              marginRight: 15,
              padding: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Text style={{ marginRight: 8, fontSize: 18 }}>Sport</Text>
                <Text style={{ marginRight: 8, fontSize: 18 }}>cipher</Text>
                <Text style={{ fontSize: 18 }}>education</Text>
              </View>
              <View style={{ justifyContent: "flex-end" }}>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="share-variant-outline"
                    size={30}
                    color={"#000"}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ width: "100%" }}>
              <Text numberOfLines={1}>
                settlers hard spell leg to get captured airplane character use
                experiment particles my changing various measure earlier
              </Text>
              <Text numberOfLines={2}>
                plural broad everyone dug got silence vegetable congress sugar
                giant muscle space everywhere apartment led fur produce blind
                practical leather together soap front draw
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Image
                source={require("../../../assets/images/blogProfile.png")}
                resizeMode="cover"
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={{ flex: 1, marginLeft: 5 }}>
                  <Text variant="bodyLarge" style={{ color: "#A83542" }}>
                    Alice Kargbo
                  </Text>
                  <Text variant="bodyLarge">Student</Text>
                </View>
                <Text
                  style={{ flex: 1, alignItems: "flex-end", marginRight: 20 }}
                  variant="bodyLarge"
                >
                  12th January, 2023
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <View
          style={{
            zIndex: 1,
            flexDirection: "row",
            position: "absolute",
            top: 15,
            left: 30,
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="heart-outline"
              color={"#A83542"}
              size={25}
            />
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "#A83542",
              paddingHorizontal: 8,
              paddingVertical: 5,
              borderRadius: 15,
              marginLeft: 5,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
              320+k
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginVertical: 10,
            borderWidth: 2,
            borderColor: "lightgrey",
            alignItems: "center",
            height: 180,
            borderRadius: 10,
          }}
        >
          <Image
            source={require("../../../assets/images/editor2.png")}
            resizeMode="cover"
            style={{
              width: 120,
              height: 180,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          />

          <View
            style={{
              flex: 1,
              //   marginHorizontal: 10,
              marginRight: 15,
              padding: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Text style={{ marginRight: 8, fontSize: 18 }}>Sport</Text>
                <Text style={{ marginRight: 8, fontSize: 18 }}>cipher</Text>
                <Text style={{ fontSize: 18 }}>education</Text>
              </View>
              <View style={{ justifyContent: "flex-end" }}>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="share-variant-outline"
                    size={30}
                    color={"#000"}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ width: "100%" }}>
              <Text numberOfLines={1}>
                Anything dawn ball leather himself we refused arrive pair felt
                sheet
              </Text>
              <Text numberOfLines={2}>
                they setting bear grandmother between dawn paint kill loose dog
                combination price immediately replace bring pen son its captured
                merely hold strip park neighborhood
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Image
                source={require("../../../assets/images/blogProfile.png")}
                resizeMode="cover"
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={{ flex: 1, marginLeft: 5 }}>
                  <Text variant="bodyLarge" style={{ color: "#A83542" }}>
                    Alice Kargbo
                  </Text>
                  <Text variant="bodyLarge">Student</Text>
                </View>
                <Text
                  style={{ flex: 1, alignItems: "flex-end", marginRight: 20 }}
                  variant="bodyLarge"
                >
                  12th January, 2023
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default BlogsPage;

const styles = StyleSheet.create({});
