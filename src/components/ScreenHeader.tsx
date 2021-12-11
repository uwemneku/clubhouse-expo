import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppText from "./AppText";

interface Props {
  /**The component show in the middle of the header */
  middleComponent?: JSX.Element | string;
  /**The component shown to the right of the header */
  rightComponent?: JSX.Element;
}

/**This renders a screen header across the app with a fixed back button */
const ScreenHeader: FC<Props> = ({ middleComponent, rightComponent }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name="chevron-back" size={40} color="black" />
      </TouchableOpacity>
      {/* Center the middleComponent in when a right component is missing */}
      <View style={{ flex: 1, marginLeft: rightComponent ? 0 : -20 }}> 
        {typeof middleComponent === "string" ? (
          <AppText
            textAlign="center"
            weight="meduim"
            size="large"
            style={{ textAlignVertical: "center" }}
          >
            {middleComponent}
          </AppText>
        ) : (
          middleComponent
        )}
      </View>
      {rightComponent}
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    // paddingHorizontal: 10,
  },
});
