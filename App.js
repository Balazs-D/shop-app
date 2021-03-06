import React, { useState } from "react";
import { View } from "react-native";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import ordersReducer from "./store/reducers/orders";
import productsReducer from "./store/reducers/products";
import cartReducer from "./store/reducers/cart";
import ShopNavigator from "./navigation/ShopNavigator";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(),
  applyMiddleware(ReduxThunk)
);

const fetchFonts = () => {
  return Font.loadAsync({
    "normal-text": require("./assets/fonts/Nunito-Regular.ttf"),
    "open-sans": require("./assets/fonts/Nunito-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "bold-text": require("./assets/fonts/Nunito-Bold.ttf"),

    "extra-bold-text": require("./assets/fonts/Nunito-ExtraBold.ttf"),
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
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <ShopNavigator />
      </View>
    </Provider>
  );
}
