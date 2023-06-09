import { View, Text, StyleSheet } from "react-native";

const App = (props) => {
  const randomNumbers = Array.from({ length: props.randomNumberCount }).map(
    () => 1 + Math.floor(10 * Math.random())
  );
  const target = randomNumbers
    .slice(0, props.randomNumberCount - 2)
    .reduce((acc, curr) => acc + curr, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.target}>{target}</Text>
      {randomNumbers.map((randomNumbers, index) => (
        <Text key={index}>{randomNumbers}</Text>
      ))}
    </View>
  );
};

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
