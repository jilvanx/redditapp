import { StyleSheet, View } from "react-native";

import { Text } from "./Text";

export function OfflineBanner() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You are offline!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
});
