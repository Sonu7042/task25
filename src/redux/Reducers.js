import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedData: [],
  total :0,
  show : true
};

export const cardSliceReducer = createSlice({
  name: "card",
  initialState,
  reducers: {

    addData: (state, action) => {
      const existingItem = state.selectedData.find(
        (item) => item.name === action.payload.name
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity || 1;
        state.total += action.payload.price

      } else {
        state.selectedData.push({ ...action.payload, quantity: 1 });
        state.total=action.payload.price
      }
    },



    increaseItem: (state, action) => {
      const updatedCart = state.selectedData.map((item) =>
        item.name === action.payload.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
       state.total += action.payload.price

      state.selectedData = updatedCart;
    },



    decreaseItem: (state, action) => {
            const updatedCart = state.selectedData.map((item) =>
                item.name === action.payload.name
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              );
              state.total -= action.payload.price

              let fitterData = updatedCart.filter((item) => item.quantity !== 0);
              state.selectedData = fitterData;

      },

            enableDisablePayment:(state, action)=>{
                state.show= action.payload
            }

  }
})


export const { addData, increaseItem, decreaseItem , enableDisablePayment} = cardSliceReducer.actions;

export default cardSliceReducer.reducer;
