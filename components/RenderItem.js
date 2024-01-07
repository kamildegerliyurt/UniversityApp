import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const RenderItem = (props) => {

const name = props.name
//-------------------------
const navigation = useNavigation();
//-------------------------
const handleButton = ()=> {
    navigation.navigate("UniversityDetails",
    {
        data: props.data
    })
}
//-------------------------

  return (
    <View style={styles.renderContainer}>
    <Pressable style={({pressed})=> [{transform: [{translateY: pressed ? 3 : 0}]},styles.buttonContainer]}
               onPress={handleButton}>
      <Text style={styles.renderText}>{name}</Text>
    </Pressable>
    </View>
  )
}

export default RenderItem

const styles = StyleSheet.create({
    renderContainer: {
        borderWidth:2,
        borderColor:"#BFCFE7",
        margin:10,
        padding:10,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20,
        backgroundColor:"#A50606",
    },
    renderText: {
        fontSize:20,
        fontWeight:"bold",
        color:"white",
    },
    buttonContainer: {
        alignItems:"center",
        justifyContent:"center",
    }



})