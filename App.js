import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import productsReducer from "./store/reducers/products";
import ProductsNavigator from "./navigation/ShopNavigator";
import { AppLoading } from "expo";
import * as Font from "expo-font";

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "extra-bold-text": require("./assets/fonts/Nunito-ExtraBold.ttf"),
    "bold-text": require("./assets/fonts/Nunito-Bold.ttf"),
    "normal-text": require("./assets/fonts/Nunito-Regular.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }
  return (
    <Provider store={store}>
      <ProductsNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
});
