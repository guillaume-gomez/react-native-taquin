import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import styles from "../../styles";


const DetailScreen : React.FunctionComponent = ({navigation}) => {
  return (
    <View style={styles.container}>
     <Text>Detail Screen</Text>
     <Button
          title="Go Home"
          onPress={() => navigation.push('Home')}
        />
    </View>
  );
};


export default DetailScreen;
