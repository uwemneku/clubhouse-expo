import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Menu, MenuItem } from "react-native-material-menu";
import { AppText, Divider, ScreenHeader, ShareIcon } from "../../../components";
import { useShareAction } from "../../../hooks";
import { StackParamList } from "../../../types";

interface Props {
  isAdmin: boolean;
  navigation: StackNavigationProp<StackParamList, "profile">;
}

const Header = ({ isAdmin, navigation }: Props) => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const [action, onShare] = useShareAction();

  const handleShareProfile = async () => {
    const url = "";
    await onShare(url);
  };
  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  return (
    <ScreenHeader
      rightComponent={
        isAdmin ? (
          <View style={styles.flexItem}>
            <ShareIcon url="" />
            <Divider variant="horizontal" size={25} />
            <TouchableOpacity onPress={() => navigation.navigate("settings")}>
              <Feather name="settings" size={30} color="black" />
            </TouchableOpacity>
          </View>
        ) : (
          <Menu
            style={{ marginTop: 30, width: 200 }}
            onRequestClose={toggleMenuVisibility}
            visible={isMenuVisible}
            anchor={
              <TouchableOpacity onPress={toggleMenuVisibility}>
                <FontAwesome5
                  name="ellipsis-v"
                  size={20}
                  style={{ padding: 20 }}
                />
              </TouchableOpacity>
            }
          >
            <MenuItem onPress={handleShareProfile}>
              <AppText size="small">Share profile</AppText>
            </MenuItem>
            <MenuItem onPress={toggleMenuVisibility}>
              <AppText size="small">Block</AppText>{" "}
            </MenuItem>
            <MenuItem onPress={toggleMenuVisibility}>
              <AppText size="small">Report an incident</AppText>
            </MenuItem>
          </Menu>
        )
      }
    />
  );
};

export default Header;

const styles = StyleSheet.create({
  flexItem: {
    flexDirection: "row",
    alignItems: "center",
  },
});
