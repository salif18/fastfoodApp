import { save } from "../reducer/reducer"


export const AddCart =(item)=>{
    return{
        type:'ADD',
        payload:item,
    }
}

export const DeleteCart =(item)=>{
    return{
        type:'DEL',
        payload:item
    }
}