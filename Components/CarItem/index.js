import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";

export default function CarItem({ name, tagLine, tagLineCTA, image }) {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagLine} <Text style={styles.subTitleCTA}>{tagLineCTA}</Text>
        </Text>
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
