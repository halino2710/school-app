import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Button } from "react-native-paper";
import StarRating from "react-native-star-rating-widget";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";

const ProductDetails = ({ route, navigation }: any) => {
  const { product } = route.params;

  const [rating, setRating] = useState(product.rating.rate);

  const [relatedProducts, setRelatedProducts] = useState([]);

  // Fetch related products based on the category of the current product
  useEffect(() => {
    fetchRelatedProducts();
  }, []);

  const fetchRelatedProducts = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${product.category}`
      );
      const products = response.data.filter(
        (p: { id: any }) => p.id !== product.id
      );
      setRelatedProducts(products);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ paddingTop: 40, marginLeft: 20 }}
      >
        <MaterialIcons name="arrow-back" size={30} />
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.imageContainer} horizontal>
            <Image
              style={styles.image}
              source={{ uri: product.image }}
              resizeMode="cover"
            />
            <Image
              style={styles.image}
              source={{ uri: product.image }}
              resizeMode="cover"
            />
            <Image
              style={styles.image}
              source={{ uri: product.image }}
              resizeMode="cover"
            />
            <Image
              style={styles.image}
              source={{ uri: product.image }}
              resizeMode="cover"
            />
            <Image
              style={styles.image}
              source={{ uri: product.image }}
              resizeMode="cover"
            />
          </ScrollView>

          <View style={{ marginVertical: 30 }}></View>

          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={{ fontSize: 20 }}>{product.category}</Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 8,
              }}
            >
              <StarRating
                rating={rating}
                onChange={setRating}
                color="#A83542"
                starSize={18}
              />
              <Text style={{ fontSize: 18 }}>({product.rating.count})</Text>
            </View>

            <Text style={styles.price}>Price: SLL {product.price}</Text>
            <TouchableOpacity style={styles.buttonContainer}>
              <Button
                mode="contained"
                style={[styles.button, { backgroundColor: "#A83542" }]}
                onPress={() => console.log("Buy Now")}
              >
                Buy Now
              </Button>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => console.log("Added to cart")}
              style={styles.buttonContainer}
            >
              <Button mode="outlined" style={styles.button}>
                Add to Cart
              </Button>
            </TouchableOpacity>
          </View>

          <Text
            style={{
              marginTop: 10,
              marginBottom: 5,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Item description:
          </Text>
          <Text style={styles.description}>{product.description}</Text>

          <View style={styles.relatedProductsContainer}>
            <Text style={styles.relatedProductsTitle}>Related Products</Text>
            <ScrollView
              contentContainerStyle={styles.relatedProductsScrollView}
              horizontal
            >
              {relatedProducts.map((relatedProduct: any) => (
                <TouchableOpacity
                  key={relatedProduct.id}
                  onPress={() =>
                    navigation.navigate("ProductDetails", {
                      product: relatedProduct,
                    })
                  }
                  style={styles.relatedProductContainer}
                >
                  <Image
                    style={styles.relatedProductImage}
                    source={{ uri: relatedProduct.image }}
                    resizeMode="cover"
                  />
                  <Text style={styles.relatedProductTitle}>
                    {relatedProduct.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginHorizontal: 30,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  price: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 10,
  },
  button: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  relatedProductsContainer: {
    marginVertical: 20,
  },
  relatedProductsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  relatedProductsScrollView: {
    alignItems: "center",
  },
  relatedProductContainer: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  relatedProductImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  relatedProductTitle: {
    marginTop: 5,
    fontSize: 16,
    textAlign: "center",
  },
});

export default ProductDetails;
