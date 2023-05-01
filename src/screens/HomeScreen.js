import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React from 'react'
import COLORS from '../constants/Colors'
import Icon from 'react-native-vector-icons/MaterialIcons'
import CategoryBtn from '../components/CategoryBtn'
import Categories from '../data/CategorieImg'
import productData from '../data/productData'
import CardProduct from '../components/CardProduct'
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>

    <Header/>

     <View style={styles.inputContainer}>
      
       <TouchableOpacity 
       style={{width:'83%',flexDirection:'row',
       padding:15,alignItems:'center',shadowOpacity:0.2,
       borderRadius:10,
       backgroundColor:'#fafafa'}}
       onPress={()=>navigation.navigate('Search')}>
        <Icon name='search' size={20} />
        <TextInput style={{width:'85%',marginLeft:10,fontSize:16,fontWeight:'bold'}} placeholder='Search'/>
        </TouchableOpacity>
      
       <TouchableOpacity style={{
        width:50,
        height:50,
        backgroundColor:COLORS.primary,
        borderRadius:10,
        padding:15
       }}>
       <Icon name='sort' size={28} color={'#fff'} />
       </TouchableOpacity>
     </View>

 <View >
     <FlatList
     
     showsHorizontalScrollIndicator={false}
     horizontal={true}
     data={Categories}
     keyExtractor={item=>item.id}
     renderItem={({item})=>(
      <CategoryBtn item={item}/>
     )}
         
     />
 </View>


 <FlatList style={styles.containerPro}
 numColumns={2}
 showsVerticalScrollIndicator={false}
 data={productData}
 keyExtractor={item => item.id}
 renderItem={({item})=>(
    <CardProduct item={item}/>
 )}
 
 />

    </SafeAreaView>
  )
}
const styles =StyleSheet.create({
 
  inputContainer:{
    padding:15,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  containerPro:{
    padding:15,
    
  }
  
})
export default HomeScreen