import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Review } from "../type";

type ReviewType={
    reviews:Review[]
}

const initialState:ReviewType = {
  reviews:[]
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    addReviews(state,action:PayloadAction<Review[]>){
        state.reviews=action.payload;
    }
  },
});

export const reviewAction=reviewsSlice.actions
export default reviewsSlice