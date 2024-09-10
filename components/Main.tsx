/* eslint-disable prettier/prettier */
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, ScrollView, Text, View } from "react-native";
import IconReact from "./Logo";
import Constants from "expo-constants";

export default function Main() {
  return (
    <>
      <StatusBar />
      <ScrollView>
        <View style={styles.container}>
          <View>
            <IconReact />
            <IconReact />
            <IconReact />
            <IconReact />
            <IconReact />
          </View>
          <View>
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
          <View>
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
};

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
