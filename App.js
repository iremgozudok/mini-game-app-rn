import { StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient colors={["#780000", "#fdf0d5"]} style={styles.screen}>
      <StartGameScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#fdf0d5",
    flex: 1,
  },
});
