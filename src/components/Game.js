import { View, Text, StyleSheet } from "react-native";
import RandomNumber from "./RandomNumber";

const Game = (props) => {
  const randomNumbers = Array.from({ length: props.randomNumberCount }).map(
    () => 1 + Math.floor(10 * Math.random())
  );
  const target = randomNumbers
    .slice(0, props.randomNumberCount - 2)
    .reduce((acc, curr) => acc + curr, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.target}>{target}</Text>
      <View style={styles.randomContainer}>
        {randomNumbers.map((randomNumbers, index) => (
          <RandomNumber key={index} number={randomNumbers} />
          // <Text style={styles.randomNumber} key={index}>{randomNumbers}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141414",
    flex: 1,
    paddingTop: 30,
  },
  target: {
    fontSize: 40,
    backgroundColor: "#303432",
    color: '#CACCCC',
    marginHorizontal: 50,
    textAlign: "center",
  },
  randomContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

export default Game;
