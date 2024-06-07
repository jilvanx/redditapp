import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Text } from "./Text";
import { getRelativeTimeString } from "../util/date";
import { useMemo } from "react";
import { WebView } from "react-native-webview";
import { router } from "expo-router";
import { colors } from "../constants/colors";

type PostItemProps = {
  created: number;
  thumbnail: string;
  title: string;
  author: string;
  score: number;
  num_comments: number;
  permalink: string;
};

export function PostItem({
  created,
  thumbnail,
  title,
  author,
  score,
  num_comments,
  permalink,
}: PostItemProps) {
  const dateRelative = useMemo(() => getRelativeTimeString(created), []);

  return (
    <>
      <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: "/browser",
            params: { title, permalink },
          })
        }
      >
        <View style={styles.container}>
          <View style={styles.body}>
            {thumbnail ? (
              <Image
                source="https://picsum.photos/seed/696/3000/2000"
                style={{ width: 300, height: 200, backgroundColor: "#eee" }}
              />
            ) : (
              // <Image
              //   style={styles.image}
              //   source={{ uri: thumbnail }}
              //   contentFit="cover"
              //   transition={1000}
              // />
              <View style={styles.whiteSquare} />
            )}
            <View style={styles.content}>
              <View style={styles.header}>
                <Text>{dateRelative}</Text>
              </View>
              <View>
                <Text type="title">{title}</Text>
              </View>
              <View style={styles.footer}>
                <Text type="small">{author}</Text>
                <Text type="small">{`Score: ${score}`}</Text>
                <Text type="small">{`${num_comments} comments`}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: "flex-end",
  },
  body: {
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    flex: 1,
    paddingLeft: 10,
    gap: 8,
  },
  image: { width: 100, height: 100, backgroundColor: "#0553" },
  whiteSquare: {
    width: 100,
    height: 100,
    backgroundColor: colors.white,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
