import { StyleSheet, View, Text } from "react-native";
import React from "react";

export default function HomeScreen() {
  return (
    <View style={styles.titleContainer}>
      <Text>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
