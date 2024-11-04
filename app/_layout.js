import { Stack } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="home/index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default _layout;
