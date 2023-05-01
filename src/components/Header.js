import { View, Text, StyleSheet,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { profile } from '../data/dataProfile'
import COLORS from '../constants/Colors'

const Header = () => {
    const navigation =useNavigation()
  return (
    <View style={styles.header}>
      <View>
      <View style={{marginRight:120, flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>Salut ! ,</Text>
        <Text style={{fontSize:16,fontWeight:'700'}}>Salif</Text>
      </View>
         <Text style={{margin:10,fontSize:16,color:'#aaaa',fontWeight:'bold'}}>Que veux tu manger to day ?</Text>
      </View>
      <TouchableOpacity
       onPress={()=>navigation.navigate('Parametre',{profile})}
      >
      <Image style={{
        width:50,
        height:50,
        borderRadius:'100%',
        borderWidth:2,
        borderColor:COLORS.primary
      }} source={require('../assets/usersimg/me.jpg')}/>
      </TouchableOpacity>
     </View>
  )
}

const styles=StyleSheet.create({
    header:{
        flexDirection:'row',
        padding:15,
        justifyContent:'space-between',
        alignItems:'center',
     },
})
export default Header