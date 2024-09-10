/* eslint-disable prettier/prettier */
import React from "react";
import { Text, View } from "react-native";
import { Slot } from "expo-router";

const Layout = () => {
  return (
    <>
      <View className="flex-1">
        <Text>Hola Mundo!</Text>
        <Slot/>
      </View>
    </>
  )
}

export default Layout;