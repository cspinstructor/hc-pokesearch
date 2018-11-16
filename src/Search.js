import React from 'react';
import { Text, View } from 'react-native';
import { Header, Item, Icon, Input, Button } from 'native-base';
import PokeLoader from './PokeLoader';
import SearchBody from './SearchBody';
import axios from 'axios';

class Search extends React.Component {
  state = {
    pokeSearch: '',
    onCall: true,
    data: {}
  };
  searchPoke = () => {
    this.setState({ onCall: true });
    const url = `https://pokeapi.co/api/v2/pokemon/${this.state.pokeSearch.toLowerCase()}`;
    axios
      .get(url)
      .then(response => {
        this.setState({ data: response.data, onCall: false });
      })
      .catch(error => {
        console.log('in searchPoke axios: ', error);
      });
    console.log(this.state.data);
  };
  renderBody = () => {
    if (this.state.onCall) {
      return <PokeLoader />;
    } else {
      return <SearchBody data={this.state.data} />;
    }
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header searchBar={true} rounded={true}>
          <Item>
            <Icon name="ios-search" onPress={this.searchPoke} />
            <Input
              // value={this.state.pokeSearch}
              placeholder="Search Pokemon"
              onChangeText={pokeSearch => {
                this.setState({ pokeSearch: pokeSearch });
              }}
            />
          </Item>
        </Header>
        {this.renderBody()}
      </View>
    );
  }
}

export default Search;
