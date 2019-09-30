import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import styles from "../../styles";


const DetailScreen : React.FunctionComponent = ({navigation}) => {
  return (
    <View style={styles.container}>
     <Button
          title="Go Home"
          onPress={() => navigation.push('Home')}
        />
      <Text>Detail Screen</Text>
    </View>
  );
};


export default DetailScreen;
