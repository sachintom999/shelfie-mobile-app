import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text>Contact</Text>
      <Link href="/" style={styles.link}>Home</Link>
    </View>
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
  },
});
