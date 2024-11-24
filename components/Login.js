import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'

import firebase from 'firebase/compat/app'
import { collection, doc, getDocs, QuerySnapshot, setDoc } from 'firebase/firestore'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { saveData } from './AsyncDB'

export const Login = () => {
  const [isloggedIn, setLoggedIn] = useState(false)
  const [username, setuser] = useState('')
  const [password, setpass] = useState('')
  const navigation = useNavigation();
  const db = firebase.firestore();
  useEffect(() => {
    console.log(isloggedIn);
    saveData('log', isloggedIn);
    saveData('usernamel', username);
  }, [isloggedIn]);

  const getusername = (text) => {
    setuser(text)
  }
  const getpass = (text) => {
    setpass(text)
  }
  const hanlepress = () => {
    setLoggedIn(true);
    getDocs(collection(db, 'Data/')).then((querySnapshot) => {
      
      querySnapshot.forEach((doc) => {
        if (username == doc.data().Username || username == doc.data().Email) {
          if (password == doc.data().Password) {
            navigation.navigate('Home');

            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: 'Home' }],
              })
            );
          }
        }

      })
    })
  }
  return (
    <>
      <View style={styles.circle1}></View>
      <View style={styles.circle2}></View>

      <View style={styles.container}>
        <Text style={styles.title}>Welcome Back !</Text>
        <Image source={require('../assets/image3.png')} style={{ width: 184, height: 138 }} />
      </View>

      <View style={styles.inputcont}>

        <View style={styles.input}>
          <TextInput placeholder='Enter Your Full Name or E-Mail' onChangeText={getusername} style={{ width: 360, height: 45, paddingLeft: 25 }} />
        </View>

        <View style={styles.input}>
          <TextInput placeholder='Enter Your Password' onChangeText={getpass} style={{ width: 360, height: 45, paddingLeft: 25 }} secureTextEntry={true} />
        </View>

        <TouchableOpacity>
          <Text style={{ fontSize: 14, marginTop: 20, color: '#50C2C9', }}> Forgot Password</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={hanlepress}>
          <View style={styles.Buton}><Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>Login</Text></View>
        </TouchableOpacity>

      </View>
    </>
  )
}

const styles = StyleSheet.create({
  inputcont: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
  },
  circle1: {
    width: 244,
    height: 244,
    borderRadius: 122,
    backgroundColor: '#55847A',
    position: 'absolute',
    opacity: 0.4,
    transform: [{ translateX: -122 }, { translateY: -61 }],
    zIndex: 100
  },
  circle2: {
    width: 244,
    height: 244,
    borderRadius: 122,
    backgroundColor: '#55847A',
    position: 'absolute',
    opacity: 0.4,
    transform: [{ translateX: -61 }, { translateY: -122 }],
    zIndex: 100
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(240,244,243)'
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 60,
  },
  input: {
    backgroundColor: 'white',
    width: 360,
    height: 45,
    borderRadius: 50,
    marginBottom: 40,
  },
  Buton: {
    backgroundColor: '#50C2C9',
    width: 345,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  }
})