import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';


const HomeScreen = () => {
  // Função para navegar para a próxima tela ao pressionar o botão Confirmar
  const navigateToNextScreen = () => {
    // Implemente a navegação para a próxima tela aqui
  };

  return (
    <ImageBackground
      source={require('../assets/background_home.jpeg')}
      style={styles.background}>
      <View style={styles.container}>
        {/* LogoView */}
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>
        {/* BlockButton */}
        <TouchableOpacity style={styles.circularButton} onPress={navigateToNextScreen}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.circularButton} onPress={navigateToNextScreen}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.circularButton} onPress={navigateToNextScreen}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 150, // Ajuste o tamanho conforme necessário
    height: 150, // Ajuste o tamanho conforme necessário
    resizeMode: 'contain',
  },
  logoContainer: {
    marginBottom: 30,
    // Estilo do LogoView
  },
  inputContainer: {
    marginBottom: 20,
    // Estilo do InputView
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    // Outros estilos para o campo de entrada
  },
  circularButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#F58634', // Customize the button color
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
