import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { Canvas, Circle, useCanvasRef } from "@shopify/react-native-skia";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

import { useSharedValue } from "react-native-reanimated";

// canvas
const C = () => {
  const ref = useCanvasRef();
  const position = useSharedValue({ x: 0, y: 0 });
  const onLeft = useSharedValue(false);

  const panGesture = Gesture.Pan()
    .onUpdate(({ x, y }) => {
      position.value = { x, y };
      console.log(position.value);
    })
    .onEnd();

  return (
    <GestureDetector gesture={panGesture}>
      <Canvas ref={ref} style={{ flex: 1, backgroundColor: "white" }}>
        <Circle cx={100} cy={100} r={10} strokeWidth={2} color="red" />
      </Canvas>
    </GestureDetector>
  );
};

const draw = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaView className="w-full h-full bg-backgroundColor p-5">
        <Text className="text-chiggaYellow text-center text-2xl">
          Write & Draw Graphs
        </Text>
        <C />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default draw;
