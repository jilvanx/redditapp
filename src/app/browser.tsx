import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, View, Text } from "react-native";
import WebView from "react-native-webview";

export default function BrowserScreen() {
  const { title, permalink } = useLocalSearchParams<{
    title: string;
    permalink: string;
  }>();

  return (
    <>
      <Stack.Screen options={{ title, headerBackTitle: "Back" }} />
      <View style={styles.container}>
        <WebView source={{ uri: `https://www.reddit.com${permalink}` }} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
