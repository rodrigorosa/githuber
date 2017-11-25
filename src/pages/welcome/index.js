import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class Welcome extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeTitle}>Fala, Dev!</Text>
        <Text style={styles.welcomeDescription}>
          Para continuar, precisamos que você informe o seu usuário no Github.
        </Text>
        
        <TextInput 
          style={styles.input}
          placeholder="Digite o seu usuário" 
        />

        <TouchableOpacity style={styles.button} onPress={ () => {} }>
          <Text style={styles.buttonText}>Prosseguir</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
