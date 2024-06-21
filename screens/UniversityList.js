import { FlatList, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {RenderItem, SearchBar} from "../components/"

const UniversityList = ({navigation}) => {

const [universityData, setUniversityData]= useState([])
const [searchData, setSearchData]= useState("")
const [filterList, setFilterList]= useState([])
//-----------------------------------------------------------
useEffect(() => {
  axios.get("http://universities.hipolabs.com/search?country=Turkey")
    .then((res)=> {
        setUniversityData(res.data)
    })
}, [])
//-----------------------------------------------------------

const handleSearchData = (value)=> {
    setSearchData(value)

const filtered = universityData.filter((item)=> 
    item.name.toLowerCase().includes(searchData.toLowerCase())
)

setFilterList(filtered)

}
//-----------------------------------------------------------

  return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.universityListContainer}>
       <SearchBar searchBar={handleSearchData}/>
          <View style={styles.flatListContainer}>
              <FlatList data={filterList.length > 0 ? filterList : universityData}
                        showsVerticalScrollIndicator={false}
                        alwaysBounceVertical={false}
                        snapToAlignment={'start'} 
                        decelerationRate={'fast'} 
                        keyExtractor={(item)=> item.id}
                        renderItem={({item})=> {
  
                          const name = item?.name
  
                          return(
                             <RenderItem data={item}
                                         name={name}/>
                          )
                        }}/>
          </View>
      </SafeAreaView>
 </TouchableWithoutFeedback>
  )
}

export default UniversityList

const styles = StyleSheet.create({
    universityListContainer: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#B6BBC4",

    },
    flatListContainer: {
        width:"95%",
        alignItems:"center",
        justifyContent:"center",
        marginVertical:10,
    }
})
