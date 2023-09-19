import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import RenderItem from '../Components/RenderItem'
import SearchBar from '../Components/SearchBar'





const UniList = ({navigation}) => {


const [uniListData, setUniListData]= useState([])


const [searchData, setSearchData]= useState("")
const [filterList, setFilterList]= useState([])




useEffect(() => {
  axios.get("http://universities.hipolabs.com/search?country=Turkey")
    .then((res)=> {
      setUniListData(res.data)
    })
}, [])



const handleButton = (value)=> {
  navigation.navigate("UniDetails",
  {
    valueTitle: value
  })
}



const handleSearchData= (value)=> {
  setSearchData(value)



const filtered=  uniListData.filter((item)=>
 item.name.toLowerCase().includes(searchData.toLowerCase())
)


setFilterList(filtered)

}





  return (
    <View style={styles.UniListContainer}>
      <SearchBar getSearchData={handleSearchData}/>
        <View style={styles.flatListContainer}>
          <FlatList 
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          data={filterList.length > 0 ? filterList : uniListData}
          keyExtractor={(item)=> item.id}
          renderItem={({item})=> <RenderItem getRenderData={item.name}
                                             getButtonData={()=> handleButton(item) }/>}
          />
        </View>
    </View>
  )
}

export default UniList

const styles = StyleSheet.create({
  UniListContainer: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#fff"
  },
  flatListContainer: {
    borderWidth:2,
    width:"95%",
    height:650,
  }
})