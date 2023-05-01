import { View, Text ,SafeAreaView} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {useNavigation} from '@react-navigation/native'
import COLORS from '../constants/Colors'
const FavoriteScreen = () => {
  const navigation =useNavigation()
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
     }}>Mes Favoris </Text>
     </View>
     <Icon name='favorite' color={COLORS.primary} size={28} />
    </View>
   </SafeAreaView>
  )
}

export default FavoriteScreen