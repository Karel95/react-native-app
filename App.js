import { Text, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import Index from "./app/index";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Index />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    margin: 20,
    padding: 20,
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
  },
});
