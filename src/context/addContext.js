import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";

const Cart =[]

const AddContext =createContext(Cart)
const getAsync =async()=>{
    try{
        const data = await AsyncStorage.getItem('Cart')
        if(data){
            return JSON.parse(data)
        }
    }catch(e){
        console.log(e)
    }
}
export const AddContextProvider =(props)=>{
  const [Cart,setCart] =useState(getAsync())

  const add =(item)=>{
      setCart(item)
     saveASync()
  }

  const saveASync =async()=>{
    try{
        AsyncStorage.setItem('Cart',JSON.stringify(Cart))
    }catch(e){
        console.log(e)
    }
  }
//   const car =(item)=>{
//     return Cart.filter((x)=>x.id !== item.id)
//   }
  const delCart =()=>{
    setCart()
    AsyncStorage.clear()
  }
    const contextValue = {
       Cart:Cart,
       addCart:add,
       deleCart:delCart,
    }
    return(
        <AddContext.Provider value={contextValue}>
           {props.children}
        </AddContext.Provider>
    )
}

export default AddContext