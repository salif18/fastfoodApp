import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import COLORS from '../constants/Colors'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {useNavigation} from '@react-navigation/native'
const CardProduct = ({item}) => {
  const navigation = useNavigation()
  return (
  
    <TouchableOpacity style={styles.card}
     onPress={()=>navigation.navigate('DetailProd',{item})}
    >
    <Image style={styles.img} source={item.img} />
      <Text style={styles.name}>{item.name}</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={styles.price}>{item.price} F</Text>
        <Icon name='add' size={28} style={{
          marginBottom:20,
          backgroundColor:COLORS.primary,
          borderRadius:20,
          borderColor:COLORS.primary,
          borderWidth:1,
          color:'#fff',

        }}/>
      </View>
    </TouchableOpacity>
    
  )
}

const styles=StyleSheet.create({
  card:{
      width:155,
      margin:10,
      padding:15,
      marginVertical:45,
      borderWidth:1,
      borderColor:COLORS.light,
      elevation:12,
      borderRadius:10,
      height:200,
      backgroundColor:'#fafafa',
      shadowOpacity:0.2
  },
  img:{
      width:120,
      height:120,
      borderRadius:'100%',
      top:-60,
      borderWidth:3,
      borderColor:COLORS.primary
  },
  name:{
    paddingTop:-80,
    fontSize:16,
    fontWeight:'bold',
    top:-25
  },
  price:{
    fontSize:16,
    marginBottom:20
  }

})
export default CardProduct