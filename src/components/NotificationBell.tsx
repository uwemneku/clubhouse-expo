import React, {FC} from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface Props{
  numberOfNotification: number
}
const NotificationBell:FC<Props> = ({numberOfNotification}) => {
  //Todo: Place the numberOfNotification props inside the component
  return (
    <View style={styles.container}>
      <FontAwesome name="bell-o" size={30} color="black" />
      <Text style={styles.text}>1</Text>
    </View>
  );
};

export default React.memo(NotificationBell);

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 30,
  },
  text: {
    backgroundColor: "red",
    right: -5,
    width: 20,
    height: 20,
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
    fontWeight: "bold",
    borderRadius: 20,
    position: "absolute",
    borderColor: "white",
    borderWidth: 1,
    elevation: 1,
  },
});
