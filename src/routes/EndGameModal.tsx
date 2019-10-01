import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import styles from "../../styles";

const EndGameModal : React.FunctionComponent = ({navigation}) => {
  const { params } = navigation.state;
  const { gameResult } = params;
  return (
    <View style={styles.container}>
        <Text style={{ fontSize: 30 }}>
          {`This is a modal! ==> ${gameResult}`}
        </Text>
        <Button
          onPress={() => navigation.goBack()}
          title="Dismiss"
        />
      </View>
  );
};


export default EndGameModal;
