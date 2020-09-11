import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CardItem = (props) => {
  return (
    <View style={styles.cartItem}>
      <Text style={styles.itemData}>
        <Text style={styles.quantity}>{props.quantity} x </Text>
        <Text style={styles.main}>{props.title}</Text>
      </Text>
      <View style={styles.itemData}>
        <Text style={styles.main}>Total: {props.amount.toFixed(2)}</Text>
        <TouchableOpacity onPress={props.onRemove} style={styles.delete}>
          <Ionicons
            name={Platform.OS === "android" ? "md-trash" : "ios-trash"}
            size={23}
            color="red"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  itemData: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    fontFamily: "normal-text",
    color: "#888",
    fontSize: 16,
  },
  main: {
    fontFamily: "bold-text",
    fontSize: 16,
  },
  delete: { marginLeft: 20 },
});

export default CardItem;
