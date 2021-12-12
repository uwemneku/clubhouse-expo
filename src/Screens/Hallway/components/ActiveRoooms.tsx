import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { AppText, Avatar, Divider } from "../../../components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Menu, MenuItem } from "react-native-material-menu";

const ActiveRoooms = () => {
  const { colors } = useTheme();
  const avatarSize = 50;
  return (
    <View style={styles.container}>
      {/* ==========Heading================ */}
      <View
        style={[
          styles.flexItems,
          {
            justifyContent: "space-between",
            alignItems: "flex-start",
          },
        ]}
      >
        <View style={{ flex: 1 }}>
          <View style={styles.flexItems}>
            <AppText weight="normal">RANTS&sBANTS</AppText>
            <Foundation name="home" size={20} color={colors.primary} />
          </View>
          <AppText
            weight="meduim"
            size="medium"
            numberOfLines={2}
            ellipsizeMode="tail"
            lineBreakMode="clip"
          >
            Is it time to canacel Tion Wayne? #rants&bants
          </AppText>
        </View>
        <MenuButton />
      </View>
      {/* ===========Room Title========= */}

      <View style={[styles.flexItems, { marginTop: 20 }]}>
        {/* ==============Avatars=========== */}
        <View style={styles.flexItems}>
          <Avatar size={avatarSize} />
          <View
            style={{
              marginLeft: -avatarSize / 2,
              marginTop: avatarSize / 2,
              zIndex: -1,
            }}
          >
            <Avatar size={avatarSize} />
          </View>
        </View>
        <Divider variant="horizontal" size={20} />
        <View>
          {/* ==============Names===================== */}
          <View style={{ flex: 1, marginBottom: 10 }}>
            {[1, 2, 3].map((item) => (
              <View key={item} style={styles.flexItems}>
                <AppText size="medium" weight="normal">
                  Sydd
                </AppText>
                <MaterialCommunityIcons
                  name="chat-processing"
                  size={15}
                  color="lightgray"
                  style={{ elevation: 3, marginLeft: 5 }}
                />
              </View>
            ))}
          </View>
          <View>
            <AppText size="small" weight="normal" style={styles.count}>
              301
              <Ionicons name="person" size={15} color="lightgray" />
              {" / "}11
              <MaterialCommunityIcons
                name="chat-processing"
                size={15}
                color="lightgray"
                style={{ elevation: 3 }}
              />
            </AppText>
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
    color: "gray",
  },
});
