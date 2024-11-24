import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { GETDATA } from './AsyncDB';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const GEtst = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('Sign');
  }
  useEffect(() => {
    //AsyncStorage.clear();// clears all AsyncStorage data before app starts up again.

    GETDATA('log').then((islog) => {
      GETDATA('islogins').then((islogins) => {
        console.log(islog, islogins);
        if (islog || islogins) { navigation.navigate('Home') }
      })

    })
  }, [])
  return (
    <>
      <View style={styles.circle1}></View>
      <View style={styles.circle2}></View>

      <View style={styles.container}>
        <Image source={require('../assets/image2.png')} style={{ width: 345, height: 254 }} />
        <Text style={styles.title}>Get things done with TODo</Text>
        <Text style={styles.lorem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam deleniti at expedita possimus quae eveniet, laudantium corrupti. Quasi dolore dicta, perferendis, culpa quod alias similique quis, accusamus dolore</Text>
      </View>
      <View style={{ flex: 0.15, justifyContent: 'center', alignItems: 'center' }}>

        <TouchableOpacity style={styles.Buton} onPress={handlePress}>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(240,244,243)',
    marginBottom: 5
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  lorem: {
    fontSize: 14,
    textAlign: 'center',
    width: 300,
    marginTop: 30,
    lineHeight: 20
  },
  circle1: {
    width: 244,
    height: 244,
    borderRadius: 122,
    backgroundColor: '#55847A',
    position: 'absolute',
    opacity: 0.4,
    transform: [{ translateX: -122 }, { translateY: -61 }]
  },
  circle2: {
    width: 244,
    height: 244,
    borderRadius: 122,
    backgroundColor: '#55847A',
    position: 'absolute',
    opacity: 0.4,
    transform: [{ translateX: -61 }, { translateY: -122 }]
  },
  Buton: {
    backgroundColor: '#50C2C9',
    width: 345,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }


})