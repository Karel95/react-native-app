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
import Texto from "./components/Texto";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ScrollView>
        <View style={styles.container}>
          <View className="bg-gray-500">
            <IconReact />
            <IconReact />
            <IconReact />
            <IconReact />
            <IconReact />
          </View>
          <View style={{ marginTop: 20 }}>
            <Image source={favicon} style={{ width: 60, height: 60 }} />
            <Texto />
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
          </View>
          <View className="gap-4" style={{ marginTop: 20 }}>
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
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    padding: 20,
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
  },
});
