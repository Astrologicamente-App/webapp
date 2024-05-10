import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const MessageOfTheDayScreen = () => {
  const [mensagemDoDia, setMensagemDoDia] = React.useState(null);

  const user_birth_date = '04/06/2001'
  
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://192.168.15.74:5000/api/mensagem-do-dia?data_nascimento=${user_birth_date}`);
        const mensagemDoDia = response.data;
        setMensagemDoDia(mensagemDoDia);
      } catch (error) {
        console.error('Error fetching message of the day:', error);
      }
    };

    fetchData();
  }, [user_birth_date]);

  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.background}>
      <View style={styles.container}>
        {mensagemDoDia ? (
          <View style={styles.messageContainer}>
          <Text style={[styles.title, styles.whiteText]}>Mensagem do Dia</Text>
          <Text style={[styles.label, styles.whiteText]}>Data de Nascimento:</Text>
          <Text style={[styles.data, styles.whiteText]}>{mensagemDoDia['data-de-nascimento']}</Text>
          <Text style={[styles.label, styles.whiteText]}>Signo:</Text>
          <Text style={[styles.data, styles.whiteText]}>{mensagemDoDia['signo']}</Text>
          <Text style={[styles.label, styles.whiteText]}>Mensagem:</Text>
          <Text style={[styles.message, styles.whiteText]}>{mensagemDoDia['mensagem']}</Text>
        </View>
        ) : (
        <Text>Loading...</Text>
        )}
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
    paddingHorizontal: 20,
  },
  messageContainer: {
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
  },
  data: {
    fontSize: 16,
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 24,
  },
  whiteText: {
    color: '#fff', // White color for text
  },
});

export default MessageOfTheDayScreen;