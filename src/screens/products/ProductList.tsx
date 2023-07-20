import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  Pressable,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Text } from "react-native-paper";
import axios from "axios";
import { MaterialIcons } from "@expo/vector-icons";
import AppTruncatedText from "../../components/AppTruncatedText";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  rating: any;
}

const api = "https://fakestoreapi.com/products";
const { width } = Dimensions.get("window");
const numOfColumns = 2;
const itemWidth = width / numOfColumns;

const ProductList: React.FC = ({ navigation }: any) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState("#fff");

  const { width } = Dimensions.get("window");

  useEffect(() => {
    StatusBar.setBarStyle("light-content", true);
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Product[]>(api);
      const products = response.data.map((product) => ({
        ...product,
      }));
      setProducts(products);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleRatingChange = (productId: number, newRating: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, rating: newRating } : product
      )
    );
  };

  // Function that triggers navigation to the product detail screen based on the product selected
  const navigateToProductDetail = (product: any) => {
    setBackgroundColor("lightgrey");
    navigation.navigate("ProductDetails", { product });
  };

  const renderProduct = ({ item }: { item: Product }) => {
    return (
      <>
        <Pressable
          onPress={() => navigateToProductDetail(item)}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "lightgrey" : "#fff",
              borderRadius: 10,
            },
            {
              alignItems: "center",
              justifyContent: "center",
              marginHorizontal: 5,
              height: 260,
              marginVertical: 10,
              width: itemWidth,
            },
          ]}
        >
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: item.image }}
              resizeMode="cover"
              style={styles.image}
            />
          </View>
          <View style={styles.descriptionPriceContainer}>
            <AppTruncatedText
              text={item.description}
              MAX_CHARACTERS={50}
              style={styles.description}
            />
            <Text style={styles.price}>SLL {item.price}</Text>
          </View>
        </Pressable>
      </>
    );
  };

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 15,
          marginHorizontal: 10,
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
            Shop Now from Our Online Store!
          </Text>
          <Text style={{ fontSize: 15, color: "#201A1A" }}>
            Every Item in our inventory is available for sale here. Buy now from
            anywhere and at anytime. Enjoy!
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator
            color={"dodgerblue"}
            size={50}
            style={{ position: "absolute", top: "50%", left: "45%" }}
          />
        ) : (
          <FlatList
            data={products}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id.toString()}
            numColumns={numOfColumns}
          />
        )}
      </View>
    </>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "",
    alignItems: "center",
    marginVertical: 5,
    width: "100%",
  },

  imageContainer: {
    paddingTop: 20,
    backgroundColor: "lightgrey",
    width: 160,
    height: 150,
    margin: 5,
    alignItems: "center",
    borderRadius: 20,
  },
  image: {
    width: "80%",
    height: 100,
    alignItems: "center",
    borderRadius: 18,
  },
  descriptionPriceContainer: {
    width: 150,
    marginBottom: 10,
  },
  description: { fontSize: 17 },
  price: {
    textAlign: "left",
    fontWeight: "bold",
    marginVertical: 5,
    fontSize: 18,
  },
});
