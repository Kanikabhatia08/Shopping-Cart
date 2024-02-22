import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action) => {
            state.push(action.payload); //action.payload -> the input paramenter sent, here post is sent
        },
        remove:(state,action) => {
            return state.filter((item) => item.id !== action.payload); //returns (shallow copy) array where id is not matched
        },
    }
});

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;