import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    itemsInCart: []
}
const CartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addtocart: (state, action) => {
            const existingItemIndex = state.itemsInCart.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex !== -1) {
                state.itemsInCart[existingItemIndex].quantity += 1;
            }
            else {
                state.itemsInCart.push({ ...action.payload, quantity: 1 });
                alert("Item: " + action.payload.pname + " added successfully!")
            }
            // state.itemsInCart.push(action.payload)
            console.log(Array.from(state.itemsInCart))
            console.log(action.payload)
        },
        increment: (state, action) => {
            const existingItemIndex = state.itemsInCart.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex !== -1) {
                state.itemsInCart[existingItemIndex].quantity += 1;
            }
        },
        decrement: (state, action) => {
            const existingItemIndex = state.itemsInCart.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex !== -1) {
                state.itemsInCart[existingItemIndex].quantity -= 1;
                if (state.itemsInCart[existingItemIndex].quantity < 1) {
                    state.itemsInCart.splice(existingItemIndex, 1);
                }
            }
        },
        deleteItem: (state, action) => {
            const existingItemIndex = state.itemsInCart.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex !== -1) {
                state.itemsInCart.splice(existingItemIndex, 1);
            }
        },
        resetCart: (state) => {
            state.itemsInCart = [];
        }
    }
})

export const { addtocart, increment, decrement, deleteItem, resetCart } = CartSlice.actions;
export default CartSlice.reducer;
