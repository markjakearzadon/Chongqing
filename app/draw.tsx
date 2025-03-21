import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { Canvas, Circle, useCanvasRef } from "@shopify/react-native-skia";

const Demo = () => {
  const ref = useCanvasRef();
  useEffect(() => {
    setTimeout(() => {
      // you can pass an optional rectangle
      // to only save part of the image
      const image = ref.current?.makeImageSnapshot();
      if (image) {
        // you can use image in an <Image> component
        // Or save to file using encodeToBytes -> Uint8Array
        const bytes = image.encodeToBytes();
        console.log({ bytes });
      }
    }, 1000);
  });
  return (
    <Canvas style={{ flex: 1 }} ref={ref}>
      <Circle r={128} cx={128} cy={128} color="red" />
    </Canvas>
  );
};

const draw = () => {
  return (
    <SafeAreaView className="w-full h-full bg-backgroundColor">
      <View className="h-full items-center mt-14">
        <Text className="text-chiggaYellow text-2xl">Write & Draw Graphs</Text>
        <Demo />
      </View>
    </SafeAreaView>
  );
};

export default draw;
