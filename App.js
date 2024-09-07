import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, View } from "react-native";

const favicon = require("./assets/favicon.png");

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={favicon} style={{ width: 60, height: 60 }} />
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Start" />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
});
