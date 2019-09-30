import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import styles from "../../styles";

const HomeScreen : React.FunctionComponent = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
          title="Go to Details... again"
          onPress={() => navigation.push('Details')}
        />
    </View>
  );
};


export default HomeScreen;
