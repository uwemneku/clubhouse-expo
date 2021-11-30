import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Divider } from "../../../components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const ActiveRoooms = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      {/* ==========Heading================ */}
      <View
        style={[
          styles.flexItems,
          { justifyContent: "space-between", alignItems: "center" },
        ]}
      >
        <View style={[styles.flexItems, { alignItems: "center" }]}>
          <Text style={{ fontWeight: "400" }}>RANTS&sBANTS</Text>
          <Divider variant="horizontal" size={10} />
          <Foundation name="home" size={20} color={colors.primary} />
        </View>
        <View style={styles.flexItems}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>
      {/* ===========Room Title========= */}
      <Text
        style={{
          width: "80%",
          marginVertical: 5,
          fontSize: 18,
          fontWeight: "bold",
        }}
        numberOfLines={1}
        ellipsizeMode="tail"
        lineBreakMode="clip"
      >
        Is it time to canacel Tion Wayne? #rants&bants
      </Text>

      <View style={[styles.flexItems, { marginTop: 20 }]}>
        {/* ==============Avatars=========== */}
        <View style={styles.flexItems}>
          <Avatar size={60} />
          <View style={{ marginLeft: -30, marginTop: 30, zIndex: -1 }}>
            <Avatar size={60} />
          </View>
        </View>
        <Divider variant="horizontal" size={20} />
        <View>
          {/* ==============Names===================== */}
          <View style={{ flex: 1 }}>
            <View style={styles.flexItems}>
              <Text style={styles.name}>Sydd</Text>
              <MaterialCommunityIcons
                name="chat-processing"
                size={20}
                color="gray"
                style={{ elevation: 3 }}
              />
            </View>
          </View>
          <View>
            <Text style={styles.count}>
              301
              <Ionicons name="person" size={20} color="gray" />
              {" / "}11
              <MaterialCommunityIcons
                name="chat-processing"
                size={20}
                color="gray"
                style={{ elevation: 3 }}
              />
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ActiveRoooms;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    paddingVertical: 40,
    elevation: 5,
  },
  flexItems: {
    flexDirection: "row",
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: "gray",
    marginHorizontal: 2,
  },
  name: {
    fontSize: 20,
    fontWeight: "400",
    marginRight: 10,
  },
  count: {
    fontSize: 18,
    color: "gray",
  },
});
