import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Text>home33333</Text>
      <Button title={"go to horny jail"} onPress={()=>{props.navigation.navigate("PostDetail")}}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
