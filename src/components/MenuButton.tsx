import React, { useEffect, useState } from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";

const MenuButton = () => {
  const { width, height } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const animtedHeight = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    top: animtedHeight.value,
  }));

  useEffect(() => {
    console.log(isOpen);
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Menu
        visible={isOpen}
        anchor={<Text onPress={toggleMenu}>Show menu</Text>}
        onRequestClose={toggleMenu}
      >
        <MenuItem onPress={toggleMenu}>Menu item 1</MenuItem>
        <MenuItem onPress={toggleMenu}>Menu item 2</MenuItem>
        <MenuItem disabled>Disabled item</MenuItem>
        <MenuDivider />
        <MenuItem onPress={toggleMenu}>Menu item 4</MenuItem>
      </Menu>
    </View>
  );
};

export default MenuButton;

const styles = StyleSheet.create({});
