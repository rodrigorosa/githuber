import React, { Component } from 'react';

import { View, Image, Text } from 'react-native';

import styles from './styles';

export default class Organization extends Component {
  state = {  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://cdn.pixabay.com/photo/2016/05/04/15/52/cats-1371991_960_720.jpg' }}
        />
        <Text style={styles.title}>Wonder Sistemas</Text>
      </View>
    );
  }
}
