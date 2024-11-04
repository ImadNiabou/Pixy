import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { FlatList } from "react-native";
import { data } from "../constants/data";

const Categories = () => {
  return (
    <FlatList
      contentContainerStyle={styles.flatListContainer}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data.categories}
      keyExtractor={(item) => item}
      renderItem={({ item, index }) => (
        <CategoryItem title={item} index={index} />
      )}
    />
  );
};

const CategoryItem = ({ title, index }) => {
  return (
    <View key={index}>
      <Pressable style={[styles.category]}>
        <Text style={[styles.title]}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 10,
    gap: 8,
  },
  category: {
    paddingHorizontal: 10,
    paddingVertical: 9,
    borderRadius: 12,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 14,
  },
});

export default Categories;
