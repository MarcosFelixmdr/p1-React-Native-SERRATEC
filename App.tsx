import { LinearGradient } from 'expo-linear-gradient';
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import icon from "./assets/Play.png";
import { styles } from "./style";

export const App = () => {
  return <View style={styles.container}>
    <Image
      source={icon}
      style={styles.image}
    />
    <Text style={styles.Text}>Bem-vindo(a) ao</Text>
    <Text style={styles.Text}>Playstation App</Text>
    <TouchableOpacity style={styles.button} activeOpacity={0.7}>
      <Text style={styles.TextSessao}>Iniciar sessão</Text>
    </TouchableOpacity>
    <Text style={styles.TextProblem}>Problemas ao iniciar uma sessão?</Text>
    <LinearGradient
      colors={['transparent', 'rgba(0,0,0,50)', 'transparent']}
      style={styles.gradient}
    >
    </LinearGradient>
  </View>
};

export default App;