import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { postEkartData,deleteEcartItem } from "../api/postEkartData";

const initialState ={
    status:"idle",
    data:[],
}

export const postCartUpdate = createAsyncThunk(
        "cartupdatesetter",
        async ({data,successCB,errorCB})=> {
            
            const response = await postEkartData(data, successCB,errorCB)
            return response?.data;
        }
)

export const deleteCartItem = createAsyncThunk(
    "cartitemdelete",
    async ({id,successCB})=>{
        
        const response = await deleteEcartItem({id,successCB})
        return response?.data
    }
)


export const EcartupdateSlice = createSlice({
name:"ekartupdatedata",
initialState:initialState,
reducers:{},
extraReducers(builder){
    builder 
    .addCase(postCartUpdate.pending,(state)=>{
        state.status = "loading"
    })
    .addCase(postCartUpdate.fulfilled,(state)=>{
        state.status = "succeeded"
        
    })
    .addCase(postCartUpdate.rejected,(state)=>{
        state.status = "failed"
    })
}})

export const EcartDeleteSlice = createSlice({
    name:'ecartdeleteproduct',
    initialState:initialState,
reducers:{},
extraReducers(builder){
    builder 
    .addCase(deleteCartItem  .pending,(state)=>{
        state.status = "loading"
    })
    .addCase(deleteCartItem .fulfilled,(state)=>{
        state.status = "succeeded"
        
    })
    .addCase(deleteCartItem  .rejected,(state)=>{
        state.status = "failed"
    })
}
})



export const ecartUpdateReducer = EcartupdateSlice.reducer
export const ecartDeleteReducer = EcartDeleteSlice.reducer



