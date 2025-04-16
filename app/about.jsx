import { Link } from "expo-router";
import { StyleSheet, useColorScheme } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

import { Colors } from "../constants/Colors";

const About = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text>About</Text>
      <Link href="/" style={styles.link}>
        Home
      </Link>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  link: {
    color: "skyblue",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
