import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const UniDetails = ({navigation, route}) => {


const total = route.params.valueTitle



const otherHandleButton= (value)=> {
  navigation.navigate("UniList",
  {
    valueTitle: value
  })
}




  return (
    <View style={styles.UniDetailsContainer}>
      <View style={styles.buttonContainer}>
        <Pressable 
        style={({pressed})=> [{backgroundColor: pressed ? "lime" : "white"}, styles.buttonOtherContainer]}
        onPress={()=> otherHandleButton()}>
           <AntDesign name="doubleleft" size={50} color="red" />
        </Pressable>
      </View>
        <View style={styles.detailsTextContainer}>
          <Text style={{fontSize:30, fontWeight:"bold", textAlign:"center"}}>{total.name}</Text>
          <Text style={{fontSize:20, fontWeight:"bold", textAlign:"center", marginVertical:10, color:"blue"}}>{total.web_pages}</Text>
          <Text style={{fontSize:30, fontWeight:"bold", textAlign:"center", marginVertical:10,}}>{total.domains}</Text>
          <Text style={{fontSize:20, fontWeight:"bold", textAlign:"center"}}>{total.country}  [{total.alpha_two_code}]</Text>
        </View>
    </View>
  )
}

export default UniDetails

const styles = StyleSheet.create({
  UniDetailsContainer: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#fff"
  },
  detailsTextContainer: {
    borderWidth:2,
    width:"95%",
    height:400,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:8,
  },
  buttonContainer: {
    
    width:375,
    height:100,
    bottom:100,
  },
  buttonOtherContainer: {
    left:300,
  }
})