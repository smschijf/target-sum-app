import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import RandomNumber from "./RandomNumber";

const Game = (props) => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  const randomNumbers = Array.from({ length: props.randomNumberCount }).map(
    () => 1 + Math.floor(10 * Math.random())
  );
  const target = randomNumbers
    .slice(0, props.randomNumberCount - 2)
    .reduce((acc, curr) => acc + curr, 0);
  const isNumberSelected = (numberIndex) => {
    return selectedNumbers.indexOf(numberIndex) >= 0;
  };
  const selectNumber = (numberIndex) => {
    setSelectedNumbers((selectedNumbers) => [...selectedNumbers, numberIndex]);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.target}>{target}</Text>
      <View style={styles.randomContainer}>
        {randomNumbers.map((randomNumber, index) => (
          <RandomNumber
            key={index}
            id={index}
            number={randomNumber}
            isDisabled={isNumberSelected(index)}
            onPress={selectNumber}
            isSelected={isNumberSelected(index)}
          />
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
    color: "#CACCCC",
    marginHorizontal: 50,
    textAlign: "center",
  },
  randomContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});

export default Game;
