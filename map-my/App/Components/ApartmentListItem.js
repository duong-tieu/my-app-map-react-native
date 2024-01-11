import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";


export default function ApartmentListItem({ apartment }) {
  return (
      <View style={styles.card}>
        <Image source={{ uri: apartment?.image }} style={styles?.image} />
        <View style={styles.rigthContainer}>
          <Text style={styles.title}>{apartment?.title}</Text>
          <View style={styles.footer}>
            <Text style={styles.price}>{apartment?.price}/night</Text>
            <Text style={styles.star}>
              ☆ {apartment?.rating} ({apartment?.numberOfStars})
            </Text>
          </View>
        </View>
      </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    margin: 10,
    flexDirection: "row",
    overflow: "hidden",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    top: 700,
  },
  rigthContainer: {
    flex: 1,
    padding: 16,
    marginLeft: 10,
  },
  price: {
    marginTop: 5,
    fontSize: 14,
    color: "gray",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "auto",
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
  },
  star: {
    fontSize: 14,
    color: "orange",
  },
  image: {
    width: 100,
    aspectRatio: 1,
  },
  closeButton: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
