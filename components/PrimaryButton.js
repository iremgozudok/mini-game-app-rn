import { Text, View, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnercontainer, styles.pressed]
            : styles.buttonInnercontainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnercontainer: {
    backgroundColor: Colors.primary500,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: "center",
    elevation: 4,
  },
  buttonText: {
    color: "#fdf0d5",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
