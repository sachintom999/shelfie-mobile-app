import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.img} />
      <Spacer height={20} />

      <ThemedText style={styles.title} title={true}>
        The Number 1
      </ThemedText>

      <Spacer height={10} />

      <ThemedText>Reading List App</ThemedText>

      <Link href="/login" style={styles.link}>
        Login
      </Link>
      <Link href="/register" style={styles.link}>
        Register
      </Link>
    </ThemedView>
  );
};

export default Home;

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
