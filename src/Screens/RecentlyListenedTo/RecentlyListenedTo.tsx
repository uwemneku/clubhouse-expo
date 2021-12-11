import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Divider, People, ScreenHeader } from "../../components";

const RecentlyListenedTo = () => {
  return (
    <View>
      <ScreenHeader middleComponent={"Recently Listened To"} />
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7]}
        renderItem={() => <People showDetails={false} />}
        keyExtractor={(item) => item.toString()}
        ItemSeparatorComponent={() => <Divider size={25} variant="vertical" />}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
    </View>
  );
};

export default RecentlyListenedTo;

const styles = StyleSheet.create({});
