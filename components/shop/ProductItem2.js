import React from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";
import Colors from "../../constants/Colors";

const ProductItem2 = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageCont}>
        <Image style={styles.image} source={{ uri: props.image }} />
      </View>
      <View style={styles.rightPanel}>
        <View style={styles.details}>
          <Text numberOfLines={2} style={styles.title}>
            {props.title}
          </Text>
          <Text style={styles.price}>${props.price.toFixed(2)}</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.buttonOption}>
            <Button
              color={Colors.accent}
              onPress={props.onViewDetail}
              title="Details"
            />
          </View>
          <View style={styles.buttonMain}>
            <Button color="white" onPress={props.onToCart} title="To Cart" />
          </View>
        </View>
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
    height: 120,
    marginHorizontal: 15,
    marginVertical: 10,
    flexDirection: "row",
  },
  rightPanel: {
    height: "100%",
    width: "70%",
    justifyContent: "space-between",
  },
  details: {
    alignItems: "flex-start",
    height: "50%",
    width: "100%",
    padding: 10,
  },
  imageCont: {
    width: "30%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
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
    height: "50%",
    width: "100%",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    marginVertical: 3,
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
  buttonMain: {
    backgroundColor: Colors.primary,
    borderRadius: 5,
  },
  buttonOption: {
    borderWidth: 1,
    borderColor: Colors.accent,
    borderRadius: 5,
  },
});

export default ProductItem2;
