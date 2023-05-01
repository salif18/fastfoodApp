import { View, Text, Image ,StyleSheet} from 'react-native'
import React from 'react'
import COLORS from '../constants/Colors'
import Mybutton from '../components/Mybutton'

const Wellcom = () => {
  return (
    <View style={{flex:1, backgroundColor:COLORS.white}}>
      <View style={{padding:50,marginTop:120,paddingVertical:20}}>
        <Image source={require('../assets/img/s.jpeg')}  />
      </View>

      <View style={styles.containerText}>
        <Text style={styles.title}>Diarry'S Delice</Text>
        <Text style={styles.text}>Nous pouvons t'aider a trouver les meilleurs delicious food</Text>
      </View>

      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
         <View style={{backgroundColor:COLORS.primary,width:30,height:10,borderRadius:5 ,margin:5}}></View>
         <View style={{backgroundColor:'#aaaa',width:20,height:10,borderRadius:5 ,margin:5}}></View>
         <View style={{backgroundColor:'#aaaa',width:20,height:10,borderRadius:5, margin:5 }}></View>
      </View>

      <View>
         <Mybutton>
           <Text style={{
            fontSize:20,
            fontWeight:'bold',
            color:COLORS.white,
            textAlign:'center'
           }} >Get Started</Text>
         </Mybutton>
      </View>

    </View>
  )
}
const styles =StyleSheet.create({
  containerText:{
    padding:15,
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
    fontSize:25,
    fontWeight:'bold'
  },
  text:{
    padding:15,
    fontSize:18,
    color:'#aaaa',

  },
})
export default Wellcom