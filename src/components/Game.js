import { View, Text, StyleSheet } from "react-native";

const App = () => {
  const target = 10 + Math.floor(40 * Math.random());
  return (
    <View style={styles.container}>
      <Text style={styles.target}>{target}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddd",
    flex: 1,
    paddingTop: 30,
  },
  target: {
    fontSize: 40,
    backgroundColor: "#aaa",
    marginHorizontal: 50,
    textAlign: "center",
  },
});

export default App;