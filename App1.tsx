import { LinearGradient } from 'expo-linear-gradient';
import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import icon from "./assets/PlayS.png";
import { styles } from "./style2";
export const App = () => {
  return <View style={styles.container}>
    <View style={styles.top}>
      <Image
        source={icon}
        style={styles.image}
      />
    </View>
    <Text style={styles.Text}>Iniciar sessão no Playstation</Text>
    <Text style={styles.Inicio}>
      ID de início de sessão (endereço de email)
    </Text>
    <TextInput
      style={styles.input}
    />
    <TouchableOpacity style={styles.button} onPress={() => { }}>
      <Text style={styles.buttonText}>Seguinte</Text>
    </TouchableOpacity>
    <Text style={styles.textBlue}>Sobre a conta da Sony</Text>
    <Text style={styles.textBlue}>Problemas ao iniciar uma sessão?</Text>
    <Text style={styles.textAjuda}>Ajuda/Mapa do site</Text>
    <LinearGradient
      colors={['transparent', 'rgba(255,255,255,0.1)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.gradient}
    />
  </View>
};

export default App;