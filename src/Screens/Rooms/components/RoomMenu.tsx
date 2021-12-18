import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { AppText, BottomSheet } from "../../../components";
import { useShareAction } from "../../../hooks";

const RoomMenu = () => {
  const [isShared, onShare] = useShareAction();
  return (
    <BottomSheet
      maxHeight={200}
      anchor={<AntDesign name="ellipsis1" size={24} color="black" />}
      content={
        <View>
          <Pressable onPress={() => onShare("")}>
            <AppText style={styles.text} weight="meduim" size="medium">
              Share Room
            </AppText>
          </Pressable>
          <AppText style={styles.text} weight="meduim" size="medium">
            Report a a recent speaker
          </AppText>
          <AppText style={styles.text} weight="meduim" size="medium">
            Search Room
          </AppText>
          <AppText style={styles.text} weight="meduim" size="medium">
            Report room title
          </AppText>
        </View>
      }
    />
  );
};

export default RoomMenu;

const styles = StyleSheet.create({
  text: {
    paddingVertical: 20,
  },
});
