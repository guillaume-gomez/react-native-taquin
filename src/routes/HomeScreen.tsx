import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import styles from "../../styles";

const HomeScreen : React.FunctionComponent = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <View>
        <Button
            title="Play"
            onPress={() => navigation.push('Game')}
          />
      </View>
      <View>
        <Button
            title="Go to Details"
            onPress={() => navigation.push('Details')}
          />
      </View>
    </View>
  );
};


export default HomeScreen;
