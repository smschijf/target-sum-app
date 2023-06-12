import { Text, StyleSheet, TouchableOpacity } from "react-native";

const RandomNumber = (props) => {
  const handlePress = () => {
    console.log(props.number);
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={[styles.randomNumber, props.isSelected && styles.selected]}>{props.number}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  randomNumber: {
    backgroundColor: "#303432",
    color: "#CACCCC",
    width: 100,
    marginHorizontal: 15,
    marginVertical: 25,
    fontSize: 35,
    textAlign: "center",
    height: "fit-content",
  },
  selected: {
    opacity: 0.3,
  },
});

export default RandomNumber;