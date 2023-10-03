import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  TouchableOpacity,
  StyleSheet,
  View,
  ActivityIndicator,
} from "react-native";

export const AnimatedRecordButton = ({ record, isLoading }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [clicked, setClicked] = useState(false);
  const micTransitionDuration = 600;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: clicked ? -280 : 0,
      duration: micTransitionDuration,
      useNativeDriver: true,
    }).start();
  }, [clicked]);

  return (
    <Animated.View
      style={{
        transform: [{ translateY: fadeAnim }],
        position: "absolute",
        bottom: 130,
      }}
    >
      <TouchableOpacity
        style={styles.recordButton}
        onPress={async () => {
          await record();
          setClicked(!clicked);
        }}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator animating={true} color={"#FFF"} size={50} />
        ) : (
          <View
            style={{
              backgroundColor: "white",
              width: 30,
              height: 30,
              borderRadius: clicked ? 2 : 15,
            }}
          />
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  recordButton: {
    height: 150,
    width: 150,
    borderRadius: 75,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f25757",
  },
  micIcon: {},
});
