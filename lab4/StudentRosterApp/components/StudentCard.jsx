import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function StudentCard({name,course,units,isFullLoad}){
    return(
        <View style={styles.card}>
        <Text style = {styles.name}>{name}</Text>
        <Text style = {styles.details}>Course:{course}</Text>
        <Text style = {styles.details}>Units Enrolled:{units}</Text>
        

        {isFullLoad&&(
            <View style={styles.badge}>
            <Text style = {styles.badgeText}>Full Load</Text>
            </View>
        )}
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#9fd9ff',
        borderRadius:8,
        padding:16,
        marginVertical:8,
        shadowColor:'#000',
        shadowOffset:{width:0,height:1},
        shadowOpacity:0.2,
        shadowRadius:1.41,
        elevation:2,
        borderLeftWidth:4,
        borderLeftColor:'#007AFF',
    },
    name:{
        fontSize:18,
        fontWeight:'bold',
        color:'#333',
        marginBottom:4,
    },
    details:{
        fontSize:14,
        color:'#666',
        marginBottom:2,
    },
    badge:{
        marginTop:8,
        backgroundColor: '#E8F5E9',
        paddingVertical:4,
        paddingHorizontal:8,
        borderRadius:4,
        alignSelf:'flex-start',
    },
    badgeText:{
        fontSize:12,
        fontWeight:'bold',
        color:'#2E7D32',
    },
});