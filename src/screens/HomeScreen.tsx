import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  // Função para navegar para a próxima tela ao pressionar o botão Confirmar
  const navigateToMensagemDoDiaScreen = () => {
    navigation.navigate('MessageOfTheDay'); // Nome da tela definido no StackNavigator
  };

  const navigateToHoroscopoScreen = () => {
    navigation.navigate('Horoscopo'); // Nome da tela definido no StackNavigator
  };

  const navigateToProfileScreen = () => {
    navigation.navigate('Profile'); // Nome da tela definido no StackNavigator
  };

  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.background}>
      <View style={styles.container}>
        {/* LogoView */}
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>
        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.circularButton} onPress={navigateToMensagemDoDiaScreen}>
            <Image source={require('../assets/buttons/mensagemdodiaButton.png')}></Image>
            <Text style={[styles.buttonText, { marginTop: -20 }]}>Mensagem</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.circularButton} onPress={navigateToHoroscopoScreen}>
            <Image source={require('../assets/buttons/horoscopoButton.png')}></Image>
            <Text style={[styles.buttonText, { marginTop: -20 }]}>Horóscopo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.circularButton} onPress={navigateToProfileScreen}>
            <Image source={require('../assets/buttons/porfileButton.png')}></Image>
            <Text style={[styles.buttonText, { marginTop: -20 }]}>Perfil</Text>
          </TouchableOpacity>
        </View>
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
    justifyContent: 'flex-end', // Alinha os elementos ao final do contêiner
    padding: 20,
  },
  logo: {
    width: 150, // Ajuste o tamanho conforme necessário
    height: 150, // Ajuste o tamanho conforme necessário
    resizeMode: 'contain',
  },
  logoContainer: {
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Centraliza os botões horizontalmente
    marginBottom: 30, // Adiciona margem inferior para afastar os botões do final da tela
  },
  circularButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
