import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  top: {
    top: -220,
    height: "20%",
    width: "100%",
    backgroundColor: "#001149",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    tintColor: "#fff",
    width: 100,
    height: 100,
  },
  Text: {
    color: "white",
    fontSize: 20,
    top: -200,
  },
  Inicio: {
    color: "white",
    fontSize: 15,
    top: -185,
    right: 50,
  },
  input: {
    backgroundColor: "#1f1e25",
    color: "white",
    fontSize: 18,
    top: -210,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 30,
    borderRadius: 10,
    borderColor: "#fff",
    borderWidth: 1,
    width: 350,
  },
  button: {
    top: -195,
    backgroundColor: "white",
    borderRadius: 100,
    width: 350,
    height: 40,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
    top: 10,
    textAlign: "center",
    justifyContent: "center",
  },
  textBlue: {
    top: -180,
    color: "#1581fdff",
    textDecorationLine: "underline",
    padding: 5,
  },
  textAjuda: {
    color: "#1581fdff",
    top: 230,
  },
  // gradient: {
  //   position: "absolute",
  //   top: 0,
  //   right: 0,
  //   width: "100%",
  //   height: "100%",
  // },
});
