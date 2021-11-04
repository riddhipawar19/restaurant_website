import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items : []
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addItem : (state,action) =>{
            state.items.push(action.payload)   
        },

        getItems: (state) =>{
            console.log("in getItems");
            return state.items
        }
    }
});

export const {addItem, getItems} = orderSlice.actions
export default orderSlice.reducer