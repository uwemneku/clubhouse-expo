import React, { useState } from "react";
import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import { AppText, Avatar, Divider } from "../../../components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import {
  NavigationProp,
  useNavigation,
  useTheme,
} from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Menu, MenuItem } from "react-native-material-menu";
import { StackParamList } from "../../../types";
import { useAppDispatch } from "../../../store";

/**
 * Snipppets of active rooms shown in the hallway
 */
const ActiveRooms = () => {
  const { colors } = useTheme();
  const avatarSize = 50;
  const navigation = useNavigation<NavigationProp<StackParamList, "hallway">>();

  const navigateToRoom = () => {
    navigation.navigate("room", { id: "hello" });
  };

  return (
    <TouchableOpacity
      onPress={navigateToRoom}
      activeOpacity={0.8}
      style={styles.container}
    >
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
            <AppText weight="normal">Typescript{"  "}</AppText>
            <Foundation name="home" size={20} color={colors.primary} />
          </View>
          <AppText
            weight="meduim"
            size="medium"
            numberOfLines={2}
            ellipsizeMode="tail"
            lineBreakMode="clip"
          >
            Why should you switch to Typescript
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
                  John doe
                </AppText>
                <MaterialCommunityIcons
                  name="chat-processing"
                  size={15}
                  color="darkgray"
                  style={{ elevation: 3, marginLeft: 5 }}
                />
              </View>
            ))}
          </View>
          <View>
            <AppText size="small" weight="normal" style={styles.count}>
              301
              <Ionicons name="person" size={15} color="darkgray" />
              {" / "}11
              <MaterialCommunityIcons
                name="chat-processing"
                size={15}
                color="darkgray"
                style={{ elevation: 3 }}
              />
            </AppText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Pressable
      onPress={toggleMenu}
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Menu
        style={{ marginTop: 20 }}
        visible={isOpen}
        anchor={<AntDesign name="ellipsis1" size={24} color="black" />}
        onRequestClose={toggleMenu}
      >
        <MenuItem onPress={toggleMenu}>Hide this room</MenuItem>
        <MenuItem onPress={toggleMenu}>Report room title</MenuItem>
      </Menu>
    </Pressable>
  );
};
export default React.memo(ActiveRooms);

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
