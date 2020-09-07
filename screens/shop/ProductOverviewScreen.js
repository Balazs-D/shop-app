import React, { useState } from "react";
import { FlatList, Text, View, Button } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";

import ProductItem2 from "../../components/shop/ProductItem2";

const ProductOverviewScreen = (props) => {
  const [view, setView] = useState(false);
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <View>
      <Button title="Change View" onPress={() => setView(!view)} />
      <FlatList
        data={products}
        renderItem={(itemData) =>
          view ? (
            <ProductItem
              title={itemData.item.title}
              price={itemData.item.price}
              image={itemData.item.imageUrl}
              onViewDetail={() => {
                props.navigation.navigate("ProductDetail", {
                  productId: itemData.item.id,
                  productTitle: itemData.item.title,
                });
              }}
            />
          ) : (
            <ProductItem2
              title={itemData.item.title}
              price={itemData.item.price}
              image={itemData.item.imageUrl}
              onViewDetail={() => {
                props.navigation.navigate("ProductDetail", {
                  productId: itemData.item.id,
                  productTitle: itemData.item.title,
                });
              }}
            />
          )
        }
      />
    </View>
  );
};

ProductOverviewScreen.navigationOptions = {
  headerTitle: "All Products",
};

export default ProductOverviewScreen;
