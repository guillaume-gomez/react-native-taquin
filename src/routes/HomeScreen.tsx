import React, { useState } from 'react';
import { Image, Text, StyleSheet, View } from 'react-primitives';
import { Button, ToastAndroid } from 'react-native';

//import { newGame } from '../services/GameService';
const navigationOptions = {
  title: '15 Puzzle App',
};

interface HomeScreenInterface {
  navigation: Navigation;
}

export const HomeScreen: React.FunctionComponent<HomeScreenInterface> = ({ navigation }) => {
  const bannerImg = require('../ressources/images/banner.jpg');

  function requestNewSingleGame() {
     requestNewGame("single");
  }

  function requestNewGame(mode: string) {
      // try {
      //       const game = await newGame()(mode);
      //       const { navigation } = this.props;
      //       navigation.navigate('Game', {
      //           game,
      //       });
      //   } catch (error) {
      //       ToastAndroid.showWithGravity(
      //           'A server error occured, please retry later.',
      //           ToastAndroid.LONG,
      //           ToastAndroid.BOTTOM,
      //       );
      //   }
  }

  function openGames() {
    navigation.navigate('Games');
  };
  return (<View style={styles.page}>
                <View style={styles.container}>
                    <View style={styles.bloc}>
                        <Text style={styles.welcome}>
                            Welcome to the 15 puzzle app!
                        </Text>
                        <Image source={bannerImg} style={styles.banner} />
                    </View>
                    <View style={styles.actions}>
                        <Button
                            style={styles.button}
                            onPress={this.requestNewSingleGame}
                            title="Singleplayer"
                        />
                        <Button
                            style={styles.button}
                            onPress={this.openGames}
                            title="Multiplayer"
                        />
                    </View>
                </View>
            </View>);
};

export default HomeScreen;

const styles = StyleSheet.create({
    actions: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        margin: 10,
        width: '100%',
    },
    banner: {
        height: 200,
        width: '100%',
    },
    button: {
        display: 'flex',
        padding: 100,
    },
    bloc: {
        backgroundColor: '#E3F2FD',
        borderRadius: 2,
        elevation: 3,
        margin: 10,
        padding: 10,
        width: '100%',
    },
    container: {
        alignItems: 'center',
        width: '90%',
        justifyContent: 'flex-start',
    },
    page: {
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flex: 1,
        height: '100%',
        justifyContent: 'flex-start',
        width: '100%',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});