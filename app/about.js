/* eslint-disable prettier/prettier */
import { Link, Stack } from "expo-router";
import React from "react";
import { Pressable, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const About = () => {
  return (
    <View className="flex-1">
      <Stack.Screen />
      <Link asChild href="/">
        <Pressable>
          <FontAwesome name="home" size={24} color="black" />
        </Pressable>
      </Link>
      <Stack />
    </View>
  );
};

export default About;
