import { View, Text, SafeAreaView, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { useRoute,useNavigation } from '@react-navigation/native'
import Icon  from 'react-native-vector-icons/MaterialIcons'
import COLORS from '../constants/Colors'
import { useDispatch, useSelector } from 'react-redux'
import { AddCart } from '../redux/actions/actions'

const DetailProd = () => {
 const dispatch =useDispatch()
 
  const navigation= useNavigation()
  const route =useRoute()
  const {item} =route.params
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
    <View style={styles.header}>
    <Icon name='arrow-back' onPress={()=>navigation.goBack()} size={28} />
      <Text style={{fontSize:16,fontWeight:'bold',margin:10}}>Details</Text>
    </View>
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
   <View style={{
    width:240,
    height:240,
    borderRadius:260/2,
    borderWidth:3,
    marginHorizontal:60,
    marginBottom:120,
    padding:6.8,
    borderColor:COLORS.primary
  }}>
    <Image style={styles.img} source={item.img} />
   </View>
   <View style={styles.infos}>
   <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
     <Text style={styles.name}>{item.name}</Text>
     <View style={{
      margin:20,width:50,height:50,borderRadius:100,backgroundColor:'#fff',
      padding:10,
    
    
    }}>
    <TouchableOpacity>
     <Icon name='favorite'  size={30} color={COLORS.primary}/>
    </TouchableOpacity>
   </View>
   </View>
     <Text style={styles.text}>{item.desc}</Text> 
   
     <TouchableOpacity 
   style={{
    margin:20,
    backgroundColor:'#fff',
    borderRadius:20,
    padding:15
}}
  onPress={()=>dispatch(AddCart(item))}
   >
     <Text  style={{textAlign:'center',fontSize:16,fontWeight:'bold',color:COLORS.primary}}>
     Add Cart <Icon name='shopping-cart' size={28} />
     </Text>
   </TouchableOpacity>
     </View>
  
     </ScrollView>
    </View>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  header:{
    padding:15,
    flexDirection:'row',
    alignItems:'center'
  },
  container:{
    flex:1,
    marginTop:20
  },
  img:{
    width:220,
    height:220,
    borderRadius:'100%'
  },
  infos:{
    borderWidth:1,
    borderColor:'#fafafa',
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    backgroundColor:COLORS.primary
  },
  name:{
    fontSize:20,
    fontWeight:'bold',
    margin:20,
    color:'#fff'
  },
  text:{
    margin:10,
    fontSize:16,
    color:'#fff'
  }
})
export default DetailProd