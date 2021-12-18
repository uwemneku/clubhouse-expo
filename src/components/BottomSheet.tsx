import { Portal } from "@gorhom/portal";
import React, { useEffect, useRef, useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  ViewStyle,
} from "react-native";
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  log,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useCustomBacKHandler } from "../hooks";

interface Props {
  anchor: JSX.Element;
  maxHeight: number;
  bottomSheetContainerStyle?: ViewStyle;
  content: JSX.Element;
}

const BottomSheet = ({
  anchor,
  maxHeight,
  content,
  bottomSheetContainerStyle,
}: Props) => {
  const { width, height } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState(false);
  const sheetTranslate = useSharedValue(-100);
  const [bottomSheetHeight] = useState<number>(0);

  useEffect(() => {
    sheetTranslate.value = isOpen ? 0 : height;
  }, [isOpen]);

  const openModal = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    sheetTranslate.value = height;
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withTiming(
          sheetTranslate.value,
          { duration: 500 },
          (isFinished) =>
            isFinished &&
            sheetTranslate.value === height &&
            runOnJS(setIsOpen)(false)
        ),
      },
    ],
  }));
  const scrollHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { startY: number }
  >({
    onStart: (_, ctx) => {
      ctx.startY = sheetTranslate.value;
    },
    onActive: ({ translationY }, ctx) => {
      console.log(translationY, bottomSheetHeight.current);
      // stop capturing if the user has dragged the sheet up more than 100px
      if (translationY > -100) {
        sheetTranslate.value = ctx.startY + translationY;
      }
    },
    onEnd: ({ translationY }) => {
      if (translationY > 100) {
        runOnJS(handleClose)();
      } else {
        sheetTranslate.value = 0;
      }
    },
  });

  return (
    <View>
      <Pressable onPress={openModal}>{anchor}</Pressable>
      <Portal>
        <Modal
          animationType="slide"
          visible={isOpen}
          transparent={true}
          onRequestClose={handleClose}
        >
          <GestureHandlerRootView style={styles.modal}>
            <Pressable onPress={handleClose} style={{ flex: 1 }} />
            <PanGestureHandler onGestureEvent={scrollHandler}>
              <Animated.View
                style={[styles.bottomSheet, { width }, animatedStyle]}
                onLayout={({
                  nativeEvent: {
                    layout: { height },
                  },
                }) => {
                  bottomSheetHeight.current = height;
                }}
              >
                <View style={styles.dash} />
                {content}
              </Animated.View>
            </PanGestureHandler>
          </GestureHandlerRootView>
        </Modal>
      </Portal>
    </View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  bottomSheet: {
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 10,
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 100,
    marginBottom: -100,
  },
  dash: {
    backgroundColor: "#ccc",
    height: 5,
    width: 50,
    alignSelf: "center",
    borderRadius: 10,
  },
});
