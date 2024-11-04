import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { StatusBar } from "react-native-web";
import { wp, hp } from "../.expo/helpers/common";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import {
  FadeIn,
  FadeOut,
  FadeInDown,
  FadeOutDown,
} from "react-native-reanimated";
import Animated from "react-native-reanimated";
const welcomeScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require("../assets/images/2.jpg")}
        style={styles.bgImage}
        resizeMode="cover"
      />
      {/* linear gradient */}
      <Animated.View
        entering={FadeInDown.duration(1000)}
        exiting={FadeOutDown}
        style={{ flex: 1 }}
      >
        <LinearGradient
          colors={["transparent", "rgba(255, 255, 255, .7)", "#fff"]}
          style={styles.gradient}
        />
        {/* content */}
        <View style={styles.contentContainer}>
          <Animated.Text
            entering={FadeInDown.duration(9000).delay(300).springify()}
            style={styles.h1}
          >
            Pixy
          </Animated.Text>
          <Text style={styles.punchLine}>Elevate Your Display</Text>
          <Animated.View
            entering={FadeInDown.duration(1000).delay(400).springify()}
          >
            <Pressable
              onPress={() => router.push("/home")}
              style={styles.starButton}
            >
              <Text style={styles.starButtonText}>Start Explore</Text>
            </Pressable>
          </Animated.View>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    width: wp(100),
    height: hp(100),
    position: "absolute",
  },
  gradient: {
    width: wp(100),
    height: hp(100),
    bottom: 0,
  },
  contentContainer: {
    position: "absolute",
    width: wp(100),
    height: hp(100),
    paddingBottom: hp(10),
    textAlign: "center",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 14,
  },
  h1: {
    fontSize: hp(8),
    fontWeight: "bold",
    color: "#040318",
  },
  punchLine: {
    fontSize: hp(2),
    color: "#343246",
    fontWeight: "bold",
  },
  starButton: {
    marginTop: hp(2),
    backgroundColor: "#040318",
    padding: 13,
    borderRadius: 17,
    width: wp(70),
  },
  starButtonText: {
    color: "#fff",
    fontSize: hp(3),
    textAlign: "center",
    letterSpacing: 1,
  },
});
export default welcomeScreen;
