/* eslint-disable prettier/prettier */
import React from "react";
import { ScrollView, Text } from "react-native";

const Index = () => {
  return (
    <ScrollView>
      {/* Aquí va el código de tu app */}
      <Text>Hello World!</Text>
      <Text className="text-white">Welcome to Karel's React Native App!</Text>
      <Text className="text-white">This is a simple app to learn React Native.</Text>
      <Text className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis auctor,
        convallis turpis nec, finibus tortor. Sed vitae felis non dolor rutrum
        lobortis. Donec non massa euismod, hendrerit lectus vel, vulputate neque.
        Aliquam erat volutpat. Sed vel dolor fermentum, feugiat lectus vel,
        vulputate justo. Donec non justo in ex tincidunt viverra. Sed tincidunt
        malesuada ipsum, at pulvinar lorem tristique ut.
      </Text>
    </ScrollView>
  )
}

export default Index;