
import React from 'react'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import COLORS from '../constants/Colors'
import HomeScreen from '../screens/HomeScreen.js'
import Icon from 'react-native-vector-icons/MaterialIcons'
import FavoriteScreen from '../screens/FavoriteScreen'
import CartScreen from'../screens/CartScreen'
import MyBuy from '../screens/MyBuy'
import Search from '../screens/Search'
import { View } from 'react-native'

const MyTabs = () => {
    const Tab = createMaterialBottomTabNavigator()
  return (
    <Tab.Navigator
    initialeRouteName='Home'
    activeColor={COLORS.primary}
    barStyle={{
        backgroundColor:COLORS.light,
        height:80,
        paddingVertical:-20
    }}
    >
     <Tab.Screen 
      name='Home'
      component={HomeScreen}
      options={{
        tabBarLabel:false,
        tabBarIcon:({color})=>(
            <Icon name='home' color={color} size={28} />
        )
      }}
     />

     <Tab.Screen 
      name='favoriteScreen'
      component={FavoriteScreen}
      options={{
        tabBarLabel:false,
        tabBarIcon:({color})=>(
            <Icon name='favorite' color={color} size={28} />
        )
      }}
     />

     <Tab.Screen 
     name='search'
     component={Search}
     options={{
        tabBarLabel:false,
       tabBarIcon:({color})=>(
        
           <Icon name='search' color={color} size={28} />
      
       )
     }}
    />

    <Tab.Screen 
    name='cartScreen'
    component={CartScreen}
    options={{
        tabBarLabel:false,
      tabBarIcon:({color})=>(
          <Icon name='shopping-cart' color={color} size={28} />
      )
    }}
   />

   <Tab.Screen 
   name='myBuy'
   component={MyBuy}
   options={{
    tabBarLabel:false,
     tabBarIcon:({color})=>(
         <Icon name='shopping-bag' color={color} size={28} />
     )
   }}
  />

    </Tab.Navigator>
  )
}

export default MyTabs