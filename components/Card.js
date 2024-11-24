import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
export const Card = ({olay='',zaman='',konum=''}) => {
    return (
        <View style={{ height: 100, width: '100%', borderBottomWidth: 1, borderBottomColor: 'lightgray' }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 2, flexDirection: 'column' }}>
                    <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 20 }}>
                        <Text style={styles.event}>{olay}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, paddingLeft: 14, alignItems: 'flex-start' }}>
                        <Entypo name="location-pin" size={24} color="black" />
                        <ScrollView>
                            <Text style={styles.adress}>{konum}</Text>
                        </ScrollView>
                    </View>
                </View>
                <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.saat}>{zaman}</Text>
                </View>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    saat: {
        fontSize: 30,
        color: 'rgb(96, 2, 96)'
    },
    event: {
        fontSize: 20,
        fontWeight: '600',

    },
    adress: {
        fontSize: 14,
        color: 'gray',
        fontStyle: 'italic'
    },
})