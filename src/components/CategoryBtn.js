import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../constants/Colors'

const CategoryBtn = ({item}) => {
  const [selectedIndex,setSelectedIndex] =useState(0)
  const change=()=>{
    setSelectedIndex(item.id)
  }
  console.log(selectedIndex)
  return (
  
    <TouchableOpacity 
    activeOpacity={0.8}
    style={{...styles.btn, backgroundColor:selectedIndex == item.id ? COLORS.primary:COLORS.secondary}}
    onPress={()=>change()}
   
    >
           <Image source={item.img} style={styles.img}/>
           <Text style={styles.name}>{item.name}</Text>

    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  btn:{
   flexDirection:'row',
        alignItems:'center',
        width:140,
        margin:10,
        borderRadius:50,
        
  },
  img:{
    width:35,
    height:35,
    borderRadius:'100%',
    margin:5,
    borderWidth:3,
    borderColor:'#fff'
  },
  name:{
    margin:10,
    fontSize:16,
    fontWeight:'bold',
    color:'#fff'
  }

})

export default CategoryBtn