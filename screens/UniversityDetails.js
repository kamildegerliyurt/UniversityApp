import { StyleSheet, Text, View, Linking, Pressable } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';


const UniversityDetails = ({ navigation, route }) => {
  const total = route.params.data;
  const name = total.name;
  const domainsArray = total.web_pages;
  const country = total.country;
  const alpha = total.alpha_two_code;

//----------------------------------------------------------------------
  const domains = Array.isArray(domainsArray) && domainsArray.length > 0 ? domainsArray[0] : '';
//----------------------------------------------------------------------
  const openArticleUrl = () => {
    if (domains) {
      Linking.openURL(domains).catch((err) => console.error('An error occurred', err));
    } else {
      console.error('Invalid URL:', domains);
    }
  };
//----------------------------------------------------------------------
const handleBackButton = ()=> {
  navigation.navigate("UniversityList")
}
//----------------------------------------------------------------------


  return (
    <SafeAreaView style={styles.universityDetailsContainer}>

      <View style={styles.iconContainer}>
        <Pressable style={({pressed})=> [{transform: [{translateX: pressed ? 0 : 3}]}]}
                   onPress={handleBackButton}>
        <Ionicons name="arrow-back-circle-sharp" size={50} color="#A50606" />
        </Pressable>
      </View>

    <View style={styles.downContainer}>
      <Text style={styles.nameText} numberOfLines={(2)}>{name}</Text>

      <Pressable onPress={openArticleUrl}>
        <Text style={styles.domainsText}>{domains}</Text>
      </Pressable>

      <View style={styles.rowContainer}>
        <Text style={styles.countryText}>{country}</Text>
        <Text style={styles.alphaText}>[{alpha}]</Text>
      </View>

    </View>  


    </SafeAreaView>
  );
};

export default UniversityDetails;

const styles = StyleSheet.create({
  universityDetailsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B6BBC4',
  },
  rowContainer: {
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-between',
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#A50606',
  },
  domainsText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    textDecorationLine: 'underline', 
  },
  countryText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#A50606',
  },
  alphaText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#A50606',
  },
  iconContainer: {
    flex:1,
    width:"95%",
    marginTop:10,
    padding:5,
    
  },
  downContainer: {
    flex:7,
    width:"95%",
    alignItems:"center",
    justifyContent:"center",
  }




});
