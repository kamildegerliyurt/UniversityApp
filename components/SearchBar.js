import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const SearchBar = (props) => {
    
const search = props.searchBar

  return (
    <View style={styles.searchBarContainer}>
      <TextInput style={styles.textInputContainer}
                 placeholder='Search...'
                 placeholderTextColor={"gray"}
                 onChangeText={search}/>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    searchBarContainer: {
     borderWidth:2,
     marginTop:40,
     width:"95%",
     padding:7,
     alignItems:"center",
     justifyContent:"center",
     borderRadius:10,
    },
    textInputContainer: {
     fontSize:20,
     fontWeight:"bold",
    }
})