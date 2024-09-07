import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

const favicon = require("./assets/favicon.png");

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={favicon} style={{ width: 60, height: 60 }} />
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        color="green"
        title="Start"
        onPress={() => {
          alert("Started");
        }}
      />
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="red"
        onPress={() => alert("Pressed!")}
        style={{
          backgroundColor: "blue",
          padding: 10,
          margin: 5,
          borderRadius: 100,
          width: 50,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Press!</Text>
      </TouchableHighlight>
      {/* PRESSABLE es el recomendado, usalo siempre en vez de los 2 anteriores. */}
      <Pressable
        onPress={() => {
          console.log("PRESSABLE es el mas recomendado!");
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
          },
        ]}
      >
        <Text>I'm pressable!</Text>
      </Pressable>

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
