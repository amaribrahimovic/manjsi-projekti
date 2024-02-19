// React
import { useNavigation } from '@react-navigation/core'
import { auth } from './firebase'
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { useState, useEffect } from 'react';


// Components
import GrayInput from './components/GrayInput';
import GrayInput2 from './components/GrayInput2';
// Images
import logo from './icons/logo-white.png';
import profileGray from './icons/profile-gray-stroke.png'
import key from './icons/key-gray.png'
// DB
import firebase from 'firebase/compat/app';
import 'firebase/compat/database'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        
      }
    })

    return unsubscribe
  }, [])

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
  
        firebase.database().ref('users/' + user.uid).once('value')
          .then(snapshot => {
            const userData = snapshot.val();
            navigation.replace("Page");
          })
          .catch(error => {
            console.log('Error retrieving user data from database:', error.message);
          });
      })
      .catch(error => {
        alert(error.message);
      });
  };
  

  return (
    <View style={styles.bg}>
      <View style={styles.outerBody}/>
      <View style={styles.bdy}>
        <Image source={logo}/>
        <View style={styles.card}>
          <GrayInput iconInput={profileGray} style={styles.child} phInput="Ime" name="ime" iconWidth={17} mr={22} setEmail={setEmail} emailS={email}/>
          <GrayInput2 iconInput={key} style={styles.child} phInput="Geslo" name="geslo" iconWidth={34} mr={5} passwordInput={true} setPassword={setPassword} passwordS={password}/>
          <TouchableOpacity onPress={handleLogin}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerBody: {
    backgroundColor: '#2C4F40',
    position: 'absolute',
    height: '50%',
    width: '100%',
    zIndex: 0
  },
  bdy: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 32,
    marginRight: 32,
    marginBottom: 64,
    marginTop: 64,
    height: '100%',
    zIndex: 1,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    paddingTop: 64,
    paddingBottom: 64,
    paddingLeft: 32,
    paddingRight: 32,
    marginTop: 32,
    justifyContent: 'space-between',
    width: '100%',
    height: 'auto',
    elevation: 5,
    shadowColor: 'rgba(0, 0, 0, 0.5)'
  },
  child:{
    marginBottom: 16
  },
  bg: {
    backgroundColor: '#fff',
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
// box-shadow: 0px 8px 16px ;
export default Login;
