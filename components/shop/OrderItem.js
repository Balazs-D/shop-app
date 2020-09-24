import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import CartItem from "./CartItem";
import Card from "../UI/Card";

const OrderItem = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.total}>$ {props.amount.toFixed(2)}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>

      {showDetails && (
        <View style={styles.detailItems}>
          {props.items.map((cartItem) => (
            <CartItem
              key={cartItem.productId}
              amount={cartItem.sum}
              title={cartItem.productTitle}
              quantity={cartItem.quantity}
            />
          ))}
        </View>
      )}
      <View style={styles.buttonCont}>
        <Button
          title={showDetails ? "Hide Details" : "Show Details"}
          color={Colors.primary}
          onPress={() => setShowDetails((prevState) => !prevState)}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  orderItem: {
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
  detailItems: {
    width: "100%",
  },
});

export default OrderItem;
