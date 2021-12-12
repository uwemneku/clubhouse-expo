import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Divider } from "../../components";
import { HallwayClubSnippet } from "./components";

const PopularClubs = () => {
  return (
    <View>
      {/* <Text></Text> */}
      <FlatList
        horizontal={true}
        data={[1, 2, 3, 4, 5]}
        renderItem={() => <HallwayClubSnippet />}
        ItemSeparatorComponent={() => (
          <Divider variant="horizontal" size={20} />
        )}
        keyExtractor={(item) => item.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ padding: 5 }}
      />
    </View>
  );
};

export default PopularClubs;

const styles = StyleSheet.create({});
