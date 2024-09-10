/* eslint-disable prettier/prettier */
import { Link } from "expo-router";
import React from "react";
import { Pressable, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const About = () => {
  return (
    <View>
      <Link asChild href="/">
        <Pressable>
          <FontAwesome name="home" size={24} color="black" />
        </Pressable>
      </Link>
    </View>
  );
};

export default About;
