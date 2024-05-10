import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';
import NavigationStack from '../navigation/NavigationStack';
import HomeScreen from '../screens/HomeScreen';

const LoginScreen = ({ navigation }) => {
  const navigateToAppScreen = () => {
    // Implemente a navegação para a próxima tela aqui
    navigation.navigate('HomeScreen'); // Substitua 'AppScreen' pelo nome da próxima tela
  };
  const navigateToRegisterScreen = () => {
    // Implemente a navegação para a próxima tela aqui
    navigation.navigate('RegisterScreen'); // Substitua 'RegisterScreen' pelo nome da tela de registro
  };
  return (
    <ImageBackground
      source={require('../assets/background_login.png')}
      style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="black"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="black"
          secureTextEntry
        />
        <TouchableOpacity style={styles.loginButton} onPress={navigateToAppScreen}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.registerButton, { marginTop: 10 }]} onPress={navigateToRegisterScreen}>
          <Text style={styles.registerText}>Register</Text>
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
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: 'white',
    marginBottom: 20,
    color: '#1111',
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  loginButton: {
    backgroundColor: '#1e90ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  registerButton: {
    backgroundColor: '#1e90ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,

  },
  registerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LoginScreen;
