import { View, Text, SafeAreaView, ScrollView, TextInput } from 'react-native'
import React from 'react'
import  Icon  from 'react-native-vector-icons/MaterialIcons'

const Search = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
     <View style={{shadowOpacity:0.3,padding:15,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
         <View style={{margin:15,height:50,borderRadius:100,backgroundColor:'#fafafa',flex:1,alignItems:'center',flexDirection:'row',padding:15}}>
         <Icon name='search' size={20} style={{marginRight:10}}/>
         <TextInput  placeholder='Search' />
         </View>
      </View>
    <ScrollView>
     
    </ScrollView>
    </SafeAreaView>
  )
}

export default Search