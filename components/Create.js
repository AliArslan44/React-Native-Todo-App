import { StyleSheet, Text, View, TextInput, Button,TouchableOpacity } from 'react-native'
import Reac, { useState } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { saveData } from './AsyncDB';

export const Create = () => {
  const [olay, setolay] = useState('');
  const [adress, setadress] = useState('');
  const [hours, sethours] = useState('');
  const [min, setmin] = useState('');
  const [time, settime] = useState(' ');
  const navigation = useNavigation();

  const getolay = (text) => {
    setolay(text)
  }
  const getadress = (text) => {
    setadress(text)
  }
  const gethour = (text) => {
    sethours(text)
    settime(text + ':' + min)
  }
  const getmin = (text) => {
    settime(hours + ':' + text)
    setmin(text)

  }
  const handlepress = () => {
    if(olay.trim() && adress.trim() && time.trim()){
      navigation.navigate('Home', { olay, adress, time })
    }
     // navigation ile adres saat ve olay bilgilerinin Home sayfasına aktarımı
  }

  return (
    <>
      <View style={styles.circle1}>{ }</View>

      <View style={styles.circle2}></View>

      <View style={styles.container}>
        <Text style={{fontSize:23,fontWeight:'bold',marginBottom:20}}>Create a New <Text style={{color:'#50C2C9'}}>TOD</Text>o  Card</Text>
        <View style={styles.input}>
          <TextInput placeholder='Enter Event(max 20)' onChangeText={getolay} maxLength={20} style={{ width: 360, height: 45, paddingLeft: 25 }} />
        </View>
        <View style={styles.input}>
          <TextInput placeholder='Enter Location Adress' onChangeText={getadress} style={{ width: 360, height: 45, paddingLeft: 25 }} />
        </View>
        <View style={{ width: 200, height: 45, flexDirection: 'row', alignItems: 'center' }}>
          <TextInput placeholder='Hour' onChangeText={gethour} textAlign='right' inputMode='decimal' maxLength={2} style={{ width: 80, height: 45, paddingLeft: 25, fontSize: 16 }} />

          <Text style={{ fontSize: 16 }}>:</Text>

          <TextInput placeholder='Minute' onChangeText={getmin} textAlign='left' inputMode='decimal' style={{ width: 80, height: 45, fontSize: 16 }} />

        </View>

        <TouchableOpacity onPress={handlepress}>
          <View style={styles.Buton}><Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>Create</Text></View>
        </TouchableOpacity>
      </View>
    </>
  )
}



const styles = StyleSheet.create({
  circle1: {
    width: 244,
    height: 244,
    borderRadius: 122,
    backgroundColor: '#55847A',
    position: 'absolute',
    opacity: 0.4,
    transform: [{ translateX: -122 }, { translateY: -61 }],
    zIndex: 10
  },
  circle2: {
    width: 244,
    height: 244,
    borderRadius: 122,
    backgroundColor: '#55847A',
    position: 'absolute',
    opacity: 0.4,
    transform: [{ translateX: -61 }, { translateY: -122 }],
    zIndex: 10
  },
  input: {
    backgroundColor: 'white',
    width: 360,
    height: 45,
    borderRadius: 50,
    marginBottom: 40,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(240,244,243)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Buton: {
    backgroundColor: '#50C2C9',
    width: 345,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
})