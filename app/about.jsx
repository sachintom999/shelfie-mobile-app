import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

const About = () => {
  return (
    <View style={styles.container}>
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
    textDecorationLine:"underline"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
