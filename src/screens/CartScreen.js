import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {useNavigation} from '@react-navigation/native'
import COLORS from '../constants/Colors'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteCart } from '../redux/actions/actions'


const CartScreen = () => {
  const navigation = useNavigation()
  const Cart = useSelector(state => state.reducer)
  console.log(Cart)
  const dispatch = useDispatch()
  return (
    <SafeAreaView style={{flex:1}}>
     <View style={{
      padding:15,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    }}>
    <View  style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
    <Icon name='arrow-back' style={{marginRight:10}} size={28} 
     onPress={()=>navigation.goBack() }/>
      <Text style={{
        fontSize:18,
        fontWeight:'bold'
      }}>Mon Assiette </Text>
      </View>
      <Icon name='shopping-cart' color={COLORS.primary} size={28} />
     </View>
     <ScrollView>
       
      {Cart.map((item)=>(
          <View style={styles.card} >
             <Image style={{width:80,height:80}} source={item.img}/>
             <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:16,fontWeight:'bold'}}>{item.name}</Text>
                <Text style={{fontSize:16,fontWeight:'bold'}}>{item.price} Fcfa</Text>
             </View>
             <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:16,fontWeight:'bold',margin:10}}>Q</Text>
                <View style={{flexDirection:'row',width:70,height:30,justifyContent:'center',alignItems:'center'}}>
                   <TouchableOpacity style={{width:30,backgroundColor:COLORS.primary,borderRadius:20}}>
                   <Text style={{fontSize:16,color:'#fff',fontWeight:'bold',margin:5}}>+</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={{
                    marginLeft:5,width:30,backgroundColor:COLORS.primary,borderRadius:20}}>
                   <Text style={{fontSize:16,color:'#fff',fontWeight:'bold',margin:5,}}>-</Text>
                   </TouchableOpacity>
                  
                </View> 
                
             </View>
             <TouchableOpacity 
                   onPress={()=>dispatch(DeleteCart(item))}
                   >
                     <Icon name='delete' style={{color:'red',marginLeft:10}} size={28}/>
                   </TouchableOpacity>
         </View>
      ))}
       
     </ScrollView>
    </SafeAreaView>
  )
}
const styles =StyleSheet.create({
  card:{
    padding:15,
    margin:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderRadius:10,
    borderWidth:1,
    borderColor:'#fafafa',
    shadowOpacity:0.5
  },
})
export default CartScreen