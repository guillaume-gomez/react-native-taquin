import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Platform
} from 'react-native';
import styles from "../../styles";


const DetailScreen : React.FunctionComponent = ({navigation}) => {
  const randomText = Math.random() > 0.5 ? "You win" : "You lose";
  return (
    <View style={styles.container}>
      <Text>Detail Screen</Text>
        <Button
          title="Go Home"
          onPress={() => navigation.push('Home')}
        />
        <Button
          onPress={() => navigation.navigate('MyModal', { gameResult: randomText })}
          title="Info"
          color={Platform.OS === 'ios' ? '#fff' : null}
        />
    </View>
  );
};


export default DetailScreen;
