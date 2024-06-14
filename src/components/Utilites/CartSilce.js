import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        
       
    },
    reducers: {
        addItem: (state, action) => {
            const { id } = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem) {
               existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            } 
            
            
        },
        clearCart:(state)=>{
            state.items=[]
        },
        removeItem:(state,action)=>{
            const { id } = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem ) {
                if(existingItem.quantity>1){
                    existingItem.quantity -= 1;
                }
                else {
                    const data = state.items.filter(item => item.id !== id);
                    if(data){
                        console.log("inside")
                        state.items.pop(data)
                    }
                }
            }
            
        }, 
        deleteItem:(state,action)=>{
            const { id } = action.payload;
            state.items = state.items.filter(item => item.id !== id);


        },
        
        

    }
})
export const {addItem,removeItem,clearCart,deleteItem} =cartSlice.actions
export default cartSlice.reducer;