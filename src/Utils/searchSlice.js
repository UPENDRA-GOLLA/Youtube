import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice(
    {
        name:
        'search',
        initialState: {

        },
        reducers: {
      cacheResults: (state,action) => {
         /*     
                const newObj = {...action.payload , ...state}
                const state = newObj or you write this           state =  Object.assign(state,action.payload)

                 {"ip":["iphone","iphne1"]} */  

          state =  Object.assign(state,action.payload)
            }
        }
    }
)
export const  {cacheResults}=searchSlice.actions

export default searchSlice.reducer;
