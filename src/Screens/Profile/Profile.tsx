import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppText, Avatar, Button, Divider } from "../../components";
import { StackParamList } from "../../types";
import { ProfileScreenHeader } from "./components";

interface Props {
  navigation: StackNavigationProp<StackParamList, "profile">;
  route: RouteProp<StackParamList, "profile">;
}

const Profile: FC<Props> = ({ navigation, route }) => {
  //TODO: Get user id from global state
  const isAdmin = true;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProfileScreenHeader {...{ isAdmin, navigation }} />
      <ScrollView style={styles.container}>
        <View>
          <Avatar size={100} />
          <Divider variant="vertical" size={15} />
          <AppText weight="meduim" size="medium">
            Isreal Uwem
          </AppText>
          <AppText weight="normal" size="small">
            @uwemneku
          </AppText>
          <Divider variant="vertical" size={15} />
          <View style={styles.flexItem}>
            <Pressable>
              <AppText weight="meduim" size="medium">
                60{" "}
                <AppText size="small" weight="normal">
                  followers
                </AppText>
              </AppText>
            </Pressable>
            <Divider variant="horizontal" size={30} />
            <Pressable>
              <AppText weight="meduim" size="medium">
                60{" "}
                <AppText weight="normal" size="small">
                  following
                </AppText>
              </AppText>
            </Pressable>
          </View>
        </View>
        <Divider variant="vertical" size={15} />

        <View>
          <AppText weight="normal" size="small">
            Victory is a set of modular charting components for React and React
            Native. Victory makes it easy to get started without sacrificing
            flexibility. Create one of a kind data visualizations with fully
            customizable styles and behaviors. Victory uses the same API for web
            and React Native applications for easy cross-platform charting.
          </AppText>
        </View>
        <Divider variant="vertical" size={30} />
        <View>
          <AppText weight="Light">Member of</AppText>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8]}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <Avatar size={50} />}
            keyExtractor={(item) => item.toString()}
            contentContainerStyle={{ padding: 10 }}
            ItemSeparatorComponent={() => (
              <Divider variant="horizontal" size={15} />
            )}
          />
        </View>
      </ScrollView>
      <View style={[styles.footer]}>
        <Button
          color="secondary"
          label={"sss"}
          variant="filled"
          style={{ backgroundColor: "lightgray" }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 0,
  },
  flexItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  footer: {
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
});
