import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation,CommonActions } from '@react-navigation/native'
import 'firebase/compat/firestore'
import firebase from 'firebase/compat/app'
import { collection, doc, getDocs, QuerySnapshot, setDoc } from 'firebase/firestore'
import { FIREBASE_DB } from '../FİrebaseConfig'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { GETDATA,saveData } from './AsyncDB'
const db = firebase.firestore();
export const Sign = () => {
    const navigation = useNavigation();
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [conpassword, setconpassword] = useState('')
    const [email, setemail] = useState('')
    const[islogins, setIslogins] = useState(false)
    const [error, seterror] = useState()
    const [errormessage, setmessage] = useState('')
   
    useEffect(()=>{
        saveData('islogins', islogins)
        saveData('usernames', username)
        console.log('data'+islogins,'data'+username);
    },[islogins])
    const getusername = (text) => {
        setusername(text);
        if (text != '') { seterror(false); setmessage(' ') } else { seterror(true); setmessage('Full Name not be EMPTY') }
    }
    const getemail = (text) => {

        setemail(text);
        if (text != '') { seterror(false); setmessage(' ') } else { seterror(true); setmessage('Mail not be EMPTY') }
        if (text.includes('@gmail.com') || text.includes('@hotmail.com') || text.includes('@outlook.com')) {
            seterror(false);
            setmessage('')
        }
        else {
            seterror(true);
            setmessage('Mail must be @gmail.com, @hotmail.com, @outlook.com')
        }
    }
    const getpassword = (text) => {
        setpassword(text);
        if (conpassword != text) {
            seterror(true);
            setmessage('Password and Confirm Password Must Be Same')
        }
        else {
            seterror(false);
            setmessage('')
        }
    }
    const getcpassword = (text) => {
        setconpassword(text);
        if (text != password) {
            seterror(true);
            setmessage('Password and Confirm Password Must Be Same')
        }
        else {
            seterror(false);
            setmessage('')
        }
    }
    const handlePresslogin = () => {
        navigation.navigate('Login');
        //AsyncStorage.clear()
        
    }
    const formcontrol = async () => {
       
        //Boşluk kontrolü
        if (error == false) {
            navigation.navigate('Home')
            setconpassword('')
            setemail('')
            setpassword('')
            await setDoc(doc(db, 'Data/', username), {
                Username: username,
                Email: email,
                Password: password,
            })
        }
    }
    const handlePressreg = () => {
        
        setIslogins(true);
       
        formcontrol();
      
    }
    return (
        <>
            <View style={styles.circle1}></View>
            <View style={styles.circle2}></View>
            <View style={styles.container}>
                <Text style={styles.title}>Welcome to Onboard !</Text>
                <Text style={error ? { color: 'red' } : styles.lorem}>{errormessage}</Text>
            </View>
            <View style={styles.inputcont}>

                <View style={styles.input}>

                    <TextInput value={username}
                        placeholder='Enter Your Full Name'
                        onChangeText={getusername}
                        style={{ width: 360, height: 45, paddingLeft: 25 }}
                    />
                </View>

                <View style={styles.input}>
                    <TextInput
                        value={email}
                        placeholder='Enter Your Email'
                        onChangeText={getemail}
                        style={{ width: 360, height: 45, paddingLeft: 25 }}
                    />
                </View>

                <View style={styles.input}>
                    <TextInput
                        value={password}
                        placeholder='Enter Your Password'
                        onChangeText={getpassword}
                        secureTextEntry={true}
                        style={{ width: 360, height: 45, paddingLeft: 25 }}
                        maxLength={8}
                    />
                </View>

                <View style={styles.input}>
                    <TextInput
                        value={conpassword}
                        maxLength={8}
                        placeholder='Confirm Password'
                        onChangeText={getcpassword}
                        secureTextEntry={true}
                        style={{ width: 360, height: 45, paddingLeft: 25 }}
                    />
                </View>

                <TouchableOpacity style={error ? {
                    backgroundColor: 'red', width: 345,
                    height: 50,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                } : styles.Buton} onPress={handlePressreg}>
                    <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>Register</Text>
                </TouchableOpacity>

                <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 20 }} onPress={handlePresslogin}>
                    Already Have Account,
                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 20, color: '#50C2C9', }} onPress={handlePresslogin}> Log in</Text>
                </Text>
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
        fontSize: 20,
        fontWeight: '900'
    },
    lorem: {
        fontSize: 14,
        textAlign: 'center',
        width: 170,
        marginTop: 30,
        lineHeight: 20
    },
    input: {
        backgroundColor: 'white',
        width: 360,
        height: 45,
        borderRadius: 50,
        marginBottom: 40,

    },
    inputcont: {
        flex: 1.2,
        justifyContent: 'start',
        alignItems: 'center',
        marginBottom: 60,

    },
    Buton: {
        backgroundColor: '#50C2C9',
        width: 345,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    errorborder: {
        borderColor: 'red',
        borderWidth: 1,
    }

})