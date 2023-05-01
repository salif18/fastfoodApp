import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'

const Mybutton = (props) => {
    const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity 
        style={styles.touche}
        onPress={()=>navigation.navigate('Home')}>
       <Text>{props.children}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    touche:{
        margin:70,
        padding:15,
        paddingVertical:15,
        width:220,
        backgroundColor:COLORS.primary,
        borderRadius:50,
    }
})

export default Mybutton