import { Image as ImageExpo } from "expo-image";
import { StyleSheet, View } from "react-native";

import { HEIGHT } from "../constants/tokens";

export function Image({ uri, id }: { uri: string; id: string }) {
  return (
    <View style={styles.container}>
      <ImageExpo
        source={{
          uri,
        }}
        id={id}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: HEIGHT,
    height: HEIGHT,
  },
  image: {
    width: HEIGHT,
    height: HEIGHT,
  },
});
