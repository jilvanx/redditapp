import { router } from "expo-router";
import { useCallback } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { Image } from "./Image";
import { Text } from "./Text";
import { getRelativeTimeString } from "../util/date";

type PostItemProps = {
  id: string;
  created: number;
  thumbnail: string;
  title: string;
  author: string;
  score: number;
  num_comments: number;
  permalink: string;
};

export function PostItem({
  id,
  created,
  thumbnail,
  title,
  author,
  score,
  num_comments,
  permalink,
}: PostItemProps) {
  const getdateRelative = useCallback(() => getRelativeTimeString(created), []);

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
            <Image uri={thumbnail} id={id} />
            <View style={styles.content}>
              <View style={styles.header}>
                <Text>{getdateRelative()}</Text>
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
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
