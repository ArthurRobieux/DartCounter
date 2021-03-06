import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  game: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  score: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  valueList: { display: "flex", flexDirection: "row", flexWrap: "wrap" },
  value: {
    width: "20%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 10,
    paddingBottom: 20,
    paddingTop: 20,
    borderColor: "red",
    borderWidth: 1,
  },
  dartList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    height: 50,
  },
  dart: { padding: 10 },
  icon: { marginBottom: 20 },
  multiplierList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    height: 50,
  },
  multiplier: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderColor: "green",
    borderWidth: 1,
    padding: 10,
  },
  selected: {
    backgroundColor: "green",
    color: "#fff",
  },
});
