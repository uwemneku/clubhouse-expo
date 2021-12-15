import { StackHeaderProps, StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppText, Divider, People } from "../../components";
import { StackParamList } from "../../types";
import { ExploreScreenHeader } from "./components";

interface Props {
  navigation: StackNavigationProp<StackParamList, "explore">;
}
const Explore = ({ navigation }: Props) => {
  return (
    <SafeAreaProvider>
      <ExploreScreenHeader navigation={navigation} />

      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7]}
        renderItem={() => <People showDetails={true} />}
        keyExtractor={(item) => item.toString()}
        ItemSeparatorComponent={() => <Divider size={25} variant="vertical" />}
        contentContainerStyle={{ padding: 10 }}
        ListHeaderComponent={() => <AppText>PEOPLE TO FOLLOW</AppText>}
        ListHeaderComponentStyle={{ marginBottom: 20 }}
      />
    </SafeAreaProvider>
  );
};

export default Explore;

const styles = StyleSheet.create({});
