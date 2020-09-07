import React from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";
import Colors from "../../constants/Colors";

const ProductItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageCont}>
        <Image style={styles.image} source={{ uri: props.image }} />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.price}>${props.price.toFixed(2)}</Text>
      </View>
      <View style={styles.row}>
        <Button
          color={Colors.accent}
          onPress={props.onViewDetail}
          title="View details"
        />
        <Button onPress={props.onToCart} title="To Cart" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 15,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
  },
  details: {
    alignItems: "center",
    height: "15%",
    padding: 10,
  },
  imageCont: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
  },
  title: {
    fontSize: 18,
    marginVertical: 3,
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
});

export default ProductItem;
