import React, { useState } from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { AppText, Avatar, Divider } from "../../../components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useSharedValue } from "react-native-reanimated";
import { Menu, MenuDivider, MenuItem } from "react-native-material-menu";

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
          <AppText>RANTS&sBANTS</AppText>
          <Divider variant="horizontal" size={10} />
          <Foundation name="home" size={20} color={colors.primary} />
        </View>
        <View style={styles.flexItems}>
          <MenuButton />
        </View>
      </View>
      {/* ===========Room Title========= */}
      <AppText
        weight="bold"
        size="medium"
        numberOfLines={1}
        ellipsizeMode="tail"
        lineBreakMode="clip"
      >
        Is it time to canacel Tion Wayne? #rants&bants
      </AppText>

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
          <View style={{ flex: 1, marginBottom: 10 }}>
            <View style={styles.flexItems}>
              <Text style={styles.name}>Sydd</Text>
              <MaterialCommunityIcons
                name="chat-processing"
                size={20}
                color="gray"
                style={{ elevation: 3 }}
              />
            </View>
            <View style={styles.flexItems}>
              <Text style={styles.name}>Sydd</Text>
              <MaterialCommunityIcons
                name="chat-processing"
                size={20}
                color="gray"
                style={{ elevation: 3 }}
              />
            </View>
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

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Menu
        style={{ marginTop: 20 }}
        visible={isOpen}
        anchor={
          <AntDesign
            name="ellipsis1"
            size={24}
            color="black"
            onPress={toggleMenu}
          />
        }
        onRequestClose={toggleMenu}
      >
        <MenuItem onPress={toggleMenu}>Hide this room</MenuItem>
        <MenuItem onPress={toggleMenu}>Report room title</MenuItem>
      </Menu>
    </View>
  );
};
export default React.memo(ActiveRoooms);

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
