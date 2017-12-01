import React, { Component } from 'react';
import { View, Text, AsyncStorage, ActivityIndicator } from 'react-native';
import Repository from './components/repository';
import api from 'services/api';

import styles from './styles';

export default class Repositories extends Component {
  state = {
    repositories: [],
    loading: false,
  };

  componentWillMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    console.tron.log('loading repositories');
    this.setState({ loading: true });

    const username = await AsyncStorage.getItem('@Githuber:username');
    const response = await api.get(`/users/${username}/repos`);

    console.tron.log(`username: ${username}`);
    console.tron.log(response.data);

    this.setState({ repositories: response.data, loading: false });
  };

  renderRepositories = () => (
    this.state.repositories.map(repo => (
      <Repository key={repo.id} repository={repo} />
    ))
  );

  renderList = () => (
    this.state.repositories.length
      ? this.renderRepositories()
      : <Text style={styles.empty}> Nenhum repositório encontrado</Text>
  );

  render() {
    return (
      <View style={styles.container}>
        { this.state.loading
        ? <ActivityIndicator size="small" color="#999" />
        : this.renderList()
      }
      </View>
    );
  }
}
