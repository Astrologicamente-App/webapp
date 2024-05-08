import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MessageOfTheDayScreen = () => {
    return(
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.background}>

    </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
});

export default MessageOfTheDayScreen;