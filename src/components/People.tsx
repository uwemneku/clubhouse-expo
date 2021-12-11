import React, { useCallback, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";
import AppText from "./AppText";
import Avatar from "./Avatar";
import Divider from "./Divider";

interface Props {
  showDetails: boolean;
}
const People = ({ showDetails }: Props) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const toggleFollowingStatus = useCallback(() => {
    setIsFollowing((prev) => !prev);
  }, []);
  return (
    <View style={styles.container}>
      <Avatar size={60} />
      <Divider size={10} variant="horizontal" />
      <View style={{ flex: 1 }}>
        <AppText>Uwem Isreal</AppText>
        {showDetails && (
          <AppText numberOfLines={2}>
            When the scroll view is disabled, this defines how far your touch
            may move off of the button, before deactivating the button. Once
            deactivated, try moving it back and you'll see that the button is
            once again reactivated! Move{" "}
          </AppText>
        )}
      </View>
      <Divider size={10} variant="horizontal" />
      <View style={{ flex: 0.5 }}>
        <Button
          label={isFollowing ? "Following" : "Follow"}
          color="secondary"
          variant={isFollowing ? "filled" : "outlined"}
          onPress={toggleFollowingStatus}
        />
      </View>
    </View>
  );
};

export default People;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
