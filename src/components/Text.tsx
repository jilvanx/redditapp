import {
  Text as RNText,
  type TextProps as RNTextProps,
  StyleSheet,
} from "react-native";

type TextProps = RNTextProps & {
  type?: "default" | "small" | "title" | "link";
};
export function Text({ type = "default", ...rest }: TextProps) {
  return <RNText numberOfLines={3} style={styles[type]} {...rest} />;
}

const styles = StyleSheet.create({
  default: {
    fontSize: 14,
    lineHeight: 24,
  },
  small: {
    fontSize: 12,
    lineHeight: 24,
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "700",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
});
