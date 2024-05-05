import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = () => {
  // Simulando dados do usuário (substitua isso pela lógica real)
  const userSign = 'Áries';
  const userHoroscope = 'Persistência e determinação são suas maiores armas hoje, Áries. Mantenha o foco em seus objetivos e não se deixe desanimar por obstáculos. Sua energia e entusiasmo contagiam os outros, então aproveite para inspirar e motivar aqueles ao seu redor. Confie em sua intuição e siga em frente com confiança!';

  return (
    <ImageBackground
      source={require('../assets/background_home.jpeg')} // Substitua 'background.jpg' pelo nome do seu arquivo de imagem
      style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo ao Astrologicamente</Text>
        <Text style={styles.subtitle}>Seu horóscopo de hoje:</Text>
        <Text style={styles.sign}>Signo: {userSign}</Text>
        <Text style={styles.horoscope}>{userHoroscope}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adicionando um overlay escuro para melhor legibilidade do texto
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
    color: 'white',
  },
  sign: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  horoscope: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
});

export default HomeScreen;
