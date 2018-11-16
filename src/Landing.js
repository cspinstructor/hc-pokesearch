import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { Button } from 'native-base';
const myBackground = require('../assets/landing.jpg');

class Landing extends React.Component {
  render() {
    return (
      <View>
        <ImageBackground source={myBackground} style={styles.imgBg}>
          <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>Welcome to PokeSearch</Text>
            <Button
              block={true}
              style={styles.buttonStyle}
              onPress={() => {
                this.props.switchScreen('search');
              }}
            >
              <Text style={styles.buttonText}>Start Searching</Text>
            </Button>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgBg: {
    width: '100%',
    height: '100%'
  },
  titleStyle: {
    fontSize: 30,
    color: 'blue',
    alignItems: 'center'
  },
  buttonStyle: {
    margin: 10
  },
  buttonText: {
    color: 'white'
  }
};
export default Landing;
