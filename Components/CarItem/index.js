import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";

export default function CarItem(props) {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelS.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitle}>Starting at $69,420</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          content="Custom Order"
          type="primary"
          onPress={() => {
            console.warn("Custom Order was pressed");
          }}
        />
        <StyledButton
          content="Existing Inventor"
          type="secondary"
          onPress={() => {
            console.warn("Existing Inventory was pressed");
          }}
        />
      </View>
    </View>
  );
}
