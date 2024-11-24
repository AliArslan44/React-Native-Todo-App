import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFonts } from 'expo-font'
import { Card } from './Card';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Data1 } from './mainvariables';
import { GETDATA, saveData } from './AsyncDB';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const Home = () => {

  const [loaded, error] = useFonts({
    'Roboto': require('../assets/Roboto-Medium.ttf'),
  });
  const route = useRoute();// navigation ile gönderilen verinin çekilmesi



  const navigation = useNavigation()

  const [cardlist, setlist] = useState([]);
  const [olaylist, setOlaylist] = useState([]);
  const [taskcounter, setTaskcounter] = useState(0);
  const [adreslist, setAdreslist] = useState([]);
  const [timelist, setTimelist] = useState([]);
  const [list, uselist] = useState([]);
  const [olay, setOlay] = useState([]);
  const [adres, setAdres] = useState([]);
  const [time, setTime] = useState([]);
  const [username, setUsername] = useState('');
  const myRender = () => {

    if (olay != null && time != null && adres != null) {
      GETDATA('olaylist').then((olay) => {
        GETDATA('timelist').then((time) => {
          GETDATA('adreslist').then((adres) => {
            GETDATA('taskcounter').then((counter) => {
              if (counter != null) {
                for (let i = 0; i <= counter; i++) {
                  list[i] = (<View key={i}><Card konum={adres[i]} olay={olay[i]} zaman={time[i]} /></View>)
                }
              }
            })
          })
        })
      })

      return list;
    }
  }

  const addcard = () => {
    list.push(<View><Card olay={route.params?.olay} konum={route.params?.adress} zaman={route.params?.time} /></View>)
    setTaskcounter(taskcounter + 1);
    saveData('taskcounter', taskcounter);

  }
  useEffect(() => {
    GETDATA('usernamel').then((usernamel) => {
      GETDATA('usernames').then((usernames) => {
        console.log('login'+usernamel,'Sign'+usernames);
        if(usernamel==null && usernames!= '') {setUsername(usernames)}
        if(usernames== '' && usernamel!= null) {setUsername(usernamel)}
        console.log('username:'+username)
      })
    })
    GETDATA('taskcounter').then((counter) => {
      if (counter != null) {
        setTaskcounter(counter);
      }
    })
    GETDATA('olaylist').then((olay) => {
      if (olay != null) {
        olaylist.push(...olay);
      }
    })
    GETDATA('timelist').then((time) => {
      if (time != null) {
        timelist.push(...time);
      }
    })
    GETDATA('adreslist').then((adres) => {
      if (adres != null) {
        adreslist.push(...adres);
      }
    })

  }, [])
  useEffect(() => {

    if (route.params?.olay, route.params?.tim, route.params?.adress != null) {
      if (route.params?.olay, route.params?.tim, route.params?.adress != '') { // boşluk kontrolü
        olaylist.push(route.params?.olay);
        timelist.push(route.params?.time);
        adreslist.push(route.params?.adress);
        saveData('olaylist', olaylist);
        saveData('timelist', timelist);
        saveData('adreslist', adreslist);
        setTaskcounter(taskcounter + 1);
        saveData('taskcounter', taskcounter);

        addcard();
        //console.log(olaylist, timelist, adreslist, taskcounter);
      }
    }
  }, [route.params?.olay, route.params?.time, route.params?.adress])
  return (
    <>
      <View style={styles.circle1}></View>
      <View style={styles.circle2}></View>
      <View style={styles.Tabcont}>
        <View style={styles.avatar}></View>
        <Text style={styles.text}>Welcome ! {username} </Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          zIndex: 10,
        }} onPress={() => { navigation.navigate('Create'); }}>
          <View style={styles.addbutton} >
            <Text style={{ color: 'white', fontSize: 30, fontWeight: '900' }}>+</Text>
          </View>
        </TouchableOpacity>

        <ScrollView>
          {
            myRender()
          }
        </ScrollView>

      </View>
    </>
  )
}
/* kullanıcı eventi en fazla 20 harf ile ifade etmeli adres:73*/

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'rgb(240,244,243)',
  },
  Tabcont: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#50C2C9',
  },
  circle1: {
    width: 244,
    height: 244,
    borderRadius: 122,
    backgroundColor: '#ECFFFD',
    position: 'absolute',
    opacity: 0.4,
    transform: [{ translateX: -122 }, { translateY: -61 }],
    zIndex: 100
  },
  circle2: {
    width: 244,
    height: 244,
    borderRadius: 122,
    backgroundColor: '#ECFFFD',
    position: 'absolute',
    opacity: 0.4,
    transform: [{ translateX: -61 }, { translateY: -122 }],
    zIndex: 100,
  },
  avatar: {
    backgroundColor: 'black',
    height: 140,
    width: 140,
    borderRadius: 70,
    marginTop: 60
  },
  text: {
    color: 'white',
    fontSize: 25,

  },
  addbutton: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: '#50C2C9',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 30,


  }
})