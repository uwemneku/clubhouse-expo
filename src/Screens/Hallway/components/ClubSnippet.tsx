import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  AppText,
  Avatar,
  Button,
  ClubIcon,
  Divider,
} from "../../../components";
import { AntDesign } from "@expo/vector-icons";

const ClubSnippet = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Avatar size={60} />
        <Divider variant="horizontal" size={20} />
        <View style={{ flex: 1 }}>
          <AppText
            size="small"
            weight="normal"
            numberOfLines={2}
            textBreakStrategy="simple"
            ellipsizeMode="tail"
            style={{ paddingBottom: 2 }}
          >
            IMPOSING ON IMPOSTER SYNDROM IMPOSING ONM <ClubIcon />
          </AppText>
          <Divider size={5} variant="vertical" />
          <AppText numberOfLines={3}>
            Welcome to the Imposing On Imposter Syndrome Club Research Suggests
            that we have Important
          </AppText>
          <Divider size={10} variant="vertical" />
          <View style={styles.buttons}>
            <View style={{ flex: 1 }}>
              <Button
                variant="filled"
                color="secondary"
                label={"Join the Club"}
              />
            </View>
            <Divider size={5} variant="horizontal" />
            <Pressable style={styles.circle}>
              <AntDesign name="close" size={18} color="gray" />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default React.memo(ClubSnippet);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: 250,
    borderRadius: 20,
    padding: 20,
    elevation: 2,
  },
  line: {},
  content: {
    flexDirection: "row",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  circle: {
    borderRadius: 20,
    padding: 5,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    alignItems: "center",
  },
});
