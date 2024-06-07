import { View, StyleSheet, RefreshControl, FlatList } from "react-native";
import { usePosts } from "../hooks/usePosts";
import { Children, PostType } from "../models/Post";
import Spinner from "react-native-loading-spinner-overlay";
import { PostItem } from "./PostItem";

export function PostList({ postType }: { postType: PostType }) {
  const {
    data: postData,
    isLoading,
    refetch,
  } = usePosts({
    postType,
  });

  const ITEM_HEIGHT = 100;

  const renderItem = ({ item }: { item: Children }) => (
    <PostItem
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

  const keyExtractor = (item: Children) => item.data.id;

  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <FlatList
        nestedScrollEnabled={true}
        horizontal={false}
        data={postData?.data.children}
        keyExtractor={keyExtractor}
        maxToRenderPerBatch={8}
        removeClippedSubviews={true}
        contentContainerStyle={{ gap: 8 }}
        showsVerticalScrollIndicator={false}
        getItemLayout={(_, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
        renderItem={renderItem}
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
