import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const SearchBar = (props) => {
  return (
    <View>
      <TextInput 
      style={styles.textInputContainer}
      placeholder='Buraya GİRİNİZ'
      placeholderTextColor={"red"}
      onChangeText={props.getSearchData}/>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    textInputContainer: {
      borderWidth:2,
      width:375,
      height:50,
      textAlign:"center",
      borderRadius:8,
      marginBottom:10,
    }
})