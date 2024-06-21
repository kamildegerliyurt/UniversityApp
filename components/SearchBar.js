import { StyleSheet, TextInput, View, TouchableWithoutFeedback } from 'react-native';
import React, { useRef } from 'react';


//------------------------------------
const SearchBar = (props) => {
  const search = props.getSearchData;
  const textInputRef = useRef(null);
//------------------------------------

  return (
    <TouchableWithoutFeedback onPress={() => textInputRef.current.focus()}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.textInputContainer}
          placeholder='Search...'
          placeholderTextColor={"gray"}
          onChangeText={search}
          ref={textInputRef}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default SearchBar;

const styles = StyleSheet.create({
  searchBarContainer: {
    borderWidth: 2,
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    borderRadius: 10,
  },
  textInputContainer: {
    fontSize: 20,
    fontWeight: "bold",
  }
});
