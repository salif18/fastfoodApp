

const Cart =[]

const reducer =(state=Cart,action)=>{
     switch(action.type){
        case 'ADD':return [
            ...state,
            action.payload,
        ] 
        ;
        break;
        case 'DEL':return state.filter((x)=>{
           return x.id !== action.payload.id
        });
        break;
        default: return state
     }
}

export default reducer