import { createSlice,createAsyncThunk }  from "@reduxjs/toolkit";
import { getEcartData } from "../api/getEcartData";

//initial state of the store 
const initialState = {
    data:[],
    status : 'idle'

}
// Thunk function to call Api call function and return the result as sync data line by line executable
export const ecartData = createAsyncThunk(
    'ecartdatagetter',
    async()=>{
        const response = await getEcartData();
        
        return response?.data;
    })
    
// slice function take the async data from thunk function and set states and export it to store
export const getCartSlice = createSlice({
    name: 'ecart',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder 
        .addCase(ecartData.pending,(state)=>{
            state.status = 'loading'
        })
        .addCase(ecartData.fulfilled,(state,action)=>{
            state.status = 'Succeed',
            
            state.data = action.payload;
        })

        .addCase(ecartData.rejected,(state)=>{
            state.status = "Failed"

        })
    }
}

)
export default getCartSlice.reducer