import { View, Text ,SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import COLORS from '../constants/Colors'
import { profile } from '../data/dataProfile'
import Icon from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const Parametre = () => {
    const userName = profile[0].name
    
  return (
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.primary}}>
    <ScrollView>
    <View style={styles.containerProf}>
    <View style={styles.nameImg}>
    <Image style={styles.img} source={require('../assets/usersimg/me.jpg')} />
      <Text style={styles.name}>{userName}</Text>
    </View>
     <TouchableOpacity  style={styles.touche} >
      <Icon name='account-circle' size={28} />
      <Text style={styles.text}>Compte</Text>
     </TouchableOpacity>

     <TouchableOpacity  style={styles.touche} >
     <MaterialCommunityIcons name='theme-light-dark' size={28} />
     <Text style={styles.text}>Theme</Text>
    </TouchableOpacity>

     <TouchableOpacity  style={styles.touche} >
     <Icon name='notifications' size={28} />
     <Text style={styles.text}>Notifications</Text>
    </TouchableOpacity>

    <TouchableOpacity  style={styles.touche} >
    <Icon name='security' size={28} />
    <Text style={styles.text}>Securite</Text>
   </TouchableOpacity>

   <TouchableOpacity  style={styles.touche} >
   <Icon name='logout' size={28} />
   <Text style={styles.text}>Se deconecter</Text>
  </TouchableOpacity>

    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containerProf:{
    padding:15,
    justifyContent:'center',
    alignItems:'center',
   
  },
  nameImg:{
    margin:20,
    backgroundColor:'#fff',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  },
  img:{
    margin:20,
    width:120,
    height:120,
    borderRadius:100,
    borderWidth:3,
    borderColor:COLORS.primary
  },
  name:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:20,
    color:"#555"
  },
  touche:{
    padding:10,
    flexDirection:'row',
    alignItems:'center',
    width:'100%',
    height:45,
    backgroundColor:'#fff',
    borderRadius:10,
    margin:10
  },
  text:{
    fontSize:18,
    fontWeight:'bold',
    color:'#555',
    marginLeft:10,
    
  }
})
export default Parametre