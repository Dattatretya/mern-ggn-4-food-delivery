import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartItems:[]
    },
    reducers:{
        addItems:(state, action)=>{
            state.cartItems.push(action.payload)
        },
        deleteItems:(state, action)=>{
            const index = state.cartItems.indexOf(action.payload)
            state.cartItems.splice(index,1)
            
            //state.cartItems.pop(action.payload)
        }
    },

})

export const {addItems, deleteItems} = cartSlice.actions;
export default cartSlice.reducer