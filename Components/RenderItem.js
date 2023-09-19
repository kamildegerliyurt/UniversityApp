import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RenderItem = (props) => {
  return (
    <View>
    <Pressable 
    style={({pressed})=> [{backgroundColor: pressed ? "lime" : "white"}]}
    onPress={props.getButtonData}>
      <Text style={styles.renderTextContainer}>{props.getRenderData}</Text>
    </Pressable>
    </View>
  )
}

export default RenderItem

const styles = StyleSheet.create({
    renderTextContainer: {
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
        borderWidth:2,
        borderRadius:8,
        margin:10,
        backgroundColor:"orange"

        
    }
    
})