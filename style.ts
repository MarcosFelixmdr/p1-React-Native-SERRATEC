import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d6ad4ff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    tintColor: "white",
    top: 300,
    width: 180,
    height: 180,
  },
  Text: {
    fontFamily: "Inter-Light",
    top: 280,
    color: "white",
    fontSize: 25,
  },
  button: {
    backgroundColor: "#fff",
    width: 300,
    height: 40,
    padding: 1,
    borderRadius: 50,
    alignItems: "center",
    marginVertical: 5,
    flexDirection: "row",
    top: 520,
    zIndex: 2,
  },
  TextSessao: {
    paddingLeft: 110,
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    zIndex: 2,
  },
  TextProblem: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    top: 540,
    zIndex: 2,
  },
  gradient: {
    flex: 1,
    width: "100%",
    height: 100,
    top: 330,
  },
});
