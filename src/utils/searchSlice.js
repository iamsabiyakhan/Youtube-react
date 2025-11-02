import {createSlice} from '@reduxjs/toolkit';
const searchSlice = createSlice({
    name: "search",
    initialState:{},
    reducers:{
        cacheResults:(state,action)=>{
            //immer library allows us to write mutating logic like this
            Object.assign(state, action.payload);
        }
    }
})
export const{cacheResults} = searchSlice.actions;
export default searchSlice.reducer;