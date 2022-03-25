import {createContext, useReducer} from "react";

export const Store  = createContext();

const initialState = {
    cart:{
        cartItems:[] // here we create empty arry 
    }
}

//we need define reducer function:

function reducer(state,action){

    switch(action.type){
        case 'CARD_ADD_ITEM':
            //ADD TO CART
           return{...state,cart:{...state.cart,cartItems:[...state.cart.cartItems,action.payload]}}

               
            default:
                return state;
    }
}

//store provider
export function StoreProvider(props){
    //define useReducer
    const [state,dispatch] = useReducer(reducer,initialState);
    const value = {state, dispatch};
    return <Store.Provider value={value}>{props.children}</Store.Provider>
}