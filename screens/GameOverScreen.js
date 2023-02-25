import { View, Text, StyleSheet } from "react-native";

function GameOverScreen() {
  return (
    <View style={styles.screen}>
      <Text>Game Over!</Text>
      <Text>Restart</Text>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({});
