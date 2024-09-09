import { StatusBar } from "expo-status-bar";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Constants from "expo-constants";
import IconReact from "./components/Logo";
import favicon from "./assets/favicon.png";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        <IconReact />
        <Image source={favicon} style={{ width: 60, height: 60 }} />
        <Text>Open up App.js to start working on your app!</Text>
        {/* PRESSABLE es el recomendado, usalo siempre en vez de los 2 anteriores. */}
        <Pressable
          onPress={() => {
            console.log("PRESSABLE es el mas recomendado!");
            alert("Started");
          }}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
            },
          ]}
        >
          <Text>I'm pressable!</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
  },
});
