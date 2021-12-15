import React from "react";
import { Share, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useShareAction } from "../hooks";

interface Props {
  url: string;
}
const ShareIcon = ({ url }: Props) => {
  const [action, onShare] = useShareAction();
  const handleShare = async () => {
    await onShare(url);
  };
  return (
    <TouchableOpacity onPress={handleShare}>
      <Ionicons name="share-social-outline" size={30} />
    </TouchableOpacity>
  );
};

export default ShareIcon;

const styles = StyleSheet.create({});
