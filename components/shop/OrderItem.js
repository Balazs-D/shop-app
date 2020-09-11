import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import CartItem from "./CartItem";

const OrderItem = (props) => {
  return (
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.total}>$ {props.amount.toFixed(2)}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <View style={styles.buttonCont}>
        <Button title="Show Details" color={Colors.primary} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  orderItem: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    margin: 20,
    padding: 10,
    alignItems: "flex-start",
  },
  summary: {
    // flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
  },
  total: {
    fontFamily: "bold-text",
    fontSize: 17,
  },
  date: {
    fontFamily: "normal-text",
    fontSize: 17,
    color: "#888",
  },
  buttonCont: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default OrderItem;
