import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useMapContext } from "./MapViewComponent";

export default function UserProfile() {
  const [userInfo, setUserInfo] = useState({
    id: 1,
    fullName: "Tran Thien Phu",
    Address: "Bu Nho, huyen Phu Rieng, Tinh Binh Phuoc, Viet Nam",
    phonenumber: "0399726725",
    email: "tphu4869@gmail.com",
  });

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text style={styles.name}>Profile detail user</Text>
          </View>
          <View>
            <Text>Name:</Text>
            <Text style={styles.text}> {userInfo?.fullName} </Text>
          </View>
          <View>
            <Text>Phone:</Text>
            <Text style={styles.text}> {userInfo?.phonenumber} </Text>
          </View>
          <View>
            <Text>Email:</Text>
            <Text style={styles.text}> {userInfo?.email} </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    margin: 50,
    marginBottom: 50,
    padding: 10,
  },
  form: {
    width: "100%",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    width: "70%",
    height: 30,
    backgroundColor: "#fff",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingLeft: 10,
    marginVertical: 5,
  },
});
