import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

const RegisterScreen = () => {
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

export default RegisterScreen;
