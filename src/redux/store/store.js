import { createStore } from "redux";
import rootReducers from "../rootReducers/rootReducers";
import AsyncStorage from "@react-native-async-storage/async-storage";


const saveStorage =async(state)=>{
    try{
       AsyncStorage.setItem('state',JSON.stringify(state))
    }catch(e){
        console.log(e)
    }
}

const loadStorage = async(state)=>{
    try{
        state = await AsyncStorage.getItem('state')
        if(data){
            return JSON.parse(data)
        }
    }catch(e){
        console.log(e)
    }
}




const store = createStore(rootReducers,loadStorage())
store.subscribe(()=>saveStorage(store.getState()))


export default store