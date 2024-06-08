import { useEffect, useMemo, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  NavigationState,
  SceneMap,
  SceneRendererProps,
  TabView,
} from "react-native-tab-view";
import { PostList } from "../components/PostList";
import { Text } from "../components/Text";
import { PostType } from "../models/Post";
import { COLORS } from "../constants/tokens";
import { OfflineBanner } from "../components/OfflineBanner";
import { useOnline } from "../hooks/useOnline";

type TabBarProps = SceneRendererProps & {
  navigationState: NavigationState<{
    key: string;
    title: string;
  }>;
};

export default function HomeScreen() {
  const [index, setIndex] = useState(0);
  const routes = useMemo(
    () => [
      {
        key: "first",
        title: "New",
      },
      {
        key: "second",
        title: "Top",
      },
      {
        key: "third",
        title: "Popular",
      },
      {
        key: "fourth",
        title: "Hot",
      },
    ],
    []
  );

  const { isOnline } = useOnline();

  const renderTabBar = (props: TabBarProps) => {
    const inputRange = props.navigationState.routes.map((_, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const backgroundColor = inputRange.map((inputIndex) =>
            inputIndex === i ? COLORS.blue : COLORS.white
          );

          const color = inputRange.map((inputIndex) =>
            inputIndex === i ? COLORS.white : COLORS.blue
          );

          return (
            <TouchableOpacity
              key={i}
              style={[
                styles.tabButton,
                { backgroundColor: backgroundColor[index] },
              ]}
              onPress={() => setIndex(i)}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: color[index],
                  fontWeight: "bold",
                }}
              >
                {route.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  useEffect(() => {
    if (!isOnline) {
      Alert.alert(
        "Internet Connection",
        "You are offline. Some features may not be available."
      );
    }
  }, [isOnline]);

  return (
    <View style={{ flex: 1 }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={SceneMap({
          first: () => <PostList key={routes[0].key} postType={PostType.New} />,
          second: () => <PostList key={PostType.Top} postType={PostType.Top} />,
          third: () => (
            <PostList key={PostType.Popular} postType={PostType.Popular} />
          ),
          fourth: () => <PostList key={PostType.Hot} postType={PostType.Hot} />,
        })}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{
          width: Dimensions.get("window").width,
        }}
      />
      {!isOnline && <OfflineBanner />}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
});
