import { Link } from "expo-router";
import { StyleSheet, useColorScheme } from "react-native";



import { Colors } from "../constants/Colors";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";

const About = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme];

  return (
    <ThemedView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <ThemedText>About</ThemedText>
      <Link href="/" style={styles.link}>
        <ThemedText>Home</ThemedText>
      </Link>
    </ThemedView>
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
