import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";

const Contact = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Contact</ThemedText>
      <Link href="/" style={styles.link}>
        <ThemedText>Home</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    marginVertical: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 36,
    margin: 10,
  },
  link: {
    color: "skyblue",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
