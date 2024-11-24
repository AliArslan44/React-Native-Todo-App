import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {useState} from'react';
export const saveData= async(key,item)=>{
    await AsyncStorage.setItem(key,JSON.stringify(item));
}
 export const GETDATA= async(key)=>{
        const value = await AsyncStorage.getItem(key); 
          return JSON.parse(value);
    }

