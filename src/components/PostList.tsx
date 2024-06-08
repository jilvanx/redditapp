import { FlatList, RefreshControl, StyleSheet, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import { Text } from "./Text";
import { PostItem } from "./PostItem";
import { HEIGHT } from "../constants/tokens";
import { usePosts } from "../hooks/usePosts";
import { Children, PostType } from "../models/Post";

export function PostList({ postType }: { postType: PostType }) {
  const {
    data: postData,
    isLoading,
    refetch,
  } = usePosts({
    postType,
  });

  const _renderItem = ({ item }: { item: Children }) => (
    <PostItem
      id={item.data.id}
      key={item.data.id}
      created={item.data.created}
      thumbnail={item.data.thumbnail}
      title={item.data.title}
      author={item.data.author}
      score={item.data.score}
      num_comments={item.data.num_comments}
      permalink={item.data.permalink}
    />
  );

  const _keyExtractor = (item: Children) => item.data.id;

  const _listEmptyComponent = () => {
    return (
      <View>
        <Text>No posts available</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <FlatList
        removeClippedSubviews={true}
        data={postData?.data.children}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        maxToRenderPerBatch={25}
        contentContainerStyle={{ gap: 8 }}
        showsVerticalScrollIndicator={false}
        getItemLayout={(_, index) => ({
          length: HEIGHT,
          offset: HEIGHT * index,
          index,
        })}
        ListEmptyComponent={_listEmptyComponent}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
