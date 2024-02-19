import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Pressable,
} from 'react-native';
import { useEffect } from 'react/cjs/react.development';

const App = ()  => {
  const [inputValue, setInputValue] = useState(0);
  const [number, setNumber] = useState(0);
  const [lada, setLada] = useState(0);
  const [fico, setFico] = useState(0);
  const [neki, setNeki] = useState(0);
  const firstMaxValue = 12;
  const maxValue = 11;
  let i = 0;

  const setNumberTextField = () =>{
    setNumber(number + inputValue);
    setFico(number + neki + inputValue);
    setLada(100 - fico);
    setNeki(maxValue - inputValue);

    if (i == 0) {
      useEffect(()=>{
        setNumber(number + neki + inputValue);
      });
      console.log(number);
      i++;
    } else{     
      setTimeout(() => {
        setNumber(number + neki + inputValue);
        if(number + inputValue >= 100){
          Alert.alert("Alert Title",
          "PC wins",
          [
            {
              text: "Cancel",
              onPress: () => Alert.alert("Cancel Pressed"),
            },
          ],
          {
            cancelable: true,
            onDismiss: () =>
              Alert.alert(
                "This alert was dismissed by tapping outside of the alert dialog."
              ),
          })
        }
      }, 3000);
    }

    if(number + inputValue >= 100){
      Alert.alert("Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => Alert.alert("Cancel Pressed"),
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            "This alert was dismissed by tapping outside of the alert dialog."
          ),
      })
    }
  }

  return (
    <SafeAreaView style={styles.Body}>
      <Text style={styles.Naslov}> Imposible game to 100</Text>
      <Text style={styles.number}>{number}</Text>
        <TextInput style={styles.textInput} onChangeText={value=> setInputValue(parseInt(value))}/>
      <Pressable style={styles.Button} onPress={setNumberTextField}>
        <Text>Dodaj število</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    // padding: 16,
    height: '10%',
    width: '20%',
    // backgroundColor: 'red',
    borderWidth: 1,
    color: '#000',
  },
  Body:{
    flex:1,
    alignItems: 'center'
  },
  Naslov: {
    color: 'red',
  },
  Button: {
    backgroundColor: 'blue',
    margin: 10,
  },
  number: {
    fontSize: 128
  }
});

export default App;