import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItems: { items: [], restaurantName: "" },
};

export const cartSlice = createSlice({
  name: "ADD_TO_CART",
  initialState: {
    selectedItems: { items: [], restaurantName: "" },
  },
  reducers: {
    add: (state, action) => {
      let newState = { ...state };
      newState.selectedItems = {
        items: [...newState.selectedItems.items, action.payload],
        restaurantName: action.payload.restaurantName,
      };
      console.log(newState, "👉");
      return newState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add } = cartSlice.actions;

export default cartSlice.reducer;
