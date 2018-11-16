import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';

export class SearchBody extends Component {
  render() {
    const pokemon = this.props.data;
    if (!pokemon) {
      return <View />;
    }
    return (
      <ScrollView style={{ flex: 1 }}>
        <Text style={styles.header}>
          #{pokemon.id} - {pokemon.name.toUpperCase()}
        </Text>
      </ScrollView>
    );
  }
}
const styles = {
  header: {
    fontSize: 30,
    color: 'red',
    textAlign: 'center'
  }
};
export default SearchBody;
