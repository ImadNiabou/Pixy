import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { theme } from "../../constants/theme";
import { hp, wp } from "../../.expo/helpers/common";
import { FontAwesome6 } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { useState, useRef } from "react";
import { router } from "expo-router";
import Categories from "../../components/Categories";

// icons
import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  const searchInputRef = useRef(null);
  const [search, setSearch] = useState("");
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 10 : 30;

  return (
    <View style={[styles.container, { paddingTop }]}>
      {/* header */}
      <View style={styles.header}>
        <Pressable>
          <View>
            <Text style={styles.title}>Pixy</Text>
          </View>
        </Pressable>
        <Pressable>
          <FontAwesome6
            name="bars-staggered"
            size={22}
            color={theme.colors.neutral(0.5)}
          />
        </Pressable>
      </View>
      <ScrollView contentContainerStyle={{ gap: 15 }}>
        {/* search bar */}
        <View style={styles.searchBar}>
          <View>
            <Feather
              style={styles.searchIcon}
              name="search"
              size={22}
              color="#7C7C7C"
            />
          </View>
          <TextInput
            ref={searchInputRef}
            value={search}
            onChangeText={(value) => {
              setSearch(value);
            }}
            placeholder="Search for photos..."
            placeholderTextColor="#7C7C7C"
            style={styles.searchInput}
          />
          {search && (
            <Pressable style={styles.filterButton}>
              <Ionicons name="close" size={22} color="#7C7C7C" />
            </Pressable>
          )}
        </View>
        {/* categories */}
        <View style={styles.categories}>
          <Categories />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5E5E5",
    flex: 1,
    gap: 15,
    display: "flex",
  },
  header: {
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: hp(3),
    fontWeight: "bold",
    color: theme.colors.neutral(0.8),
  },
  searchBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 12,
  },
  searchIcon: {
    padding: 6,
  },
  searchInput: {
    flex: 1,
    borderRadius: theme.radius.sm,
    fontSize: 16,
    color: theme.colors.neutral(0.8),
    paddingVertical: 10,
  },
  filterButton: {
    padding: 8,
    borderRadius: theme.radius.sm,
    backgroundColor: "#e5e5e5",
  },
});
export default HomeScreen;
