import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

import styles from './styles';

export default class Welcome extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  }

  static navigationOptions = {
    header: null,
  }

  navigateToUser = () => {
    const { dispatch } = this.props.navigation;

    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'User' }),
      ],
    });

    dispatch(resetAction);
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

        <TouchableOpacity style={styles.button} onPress={ this.navigateToUser }>
          <Text style={styles.buttonText}>Prosseguir</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
