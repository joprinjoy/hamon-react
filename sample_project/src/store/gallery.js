import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getGalleryData } from "../api/getGalleryData";

const initialState = {
status :'pending',
data : [],
}

export const GalleryData= createAsyncThunk(
    'gallerygetter',
    async()=>{
        const response = await getGalleryData();
       
        return response?.data;
    }
)

export const getGallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducer:{},

    extraReducers(builder){
        builder
        .addCase(GalleryData.pending,(state)=>{
            state.status = 'loading';

        })

        .addCase(GalleryData.fulfilled,(state,action)=>{
            state.status = 'succeed'
            
            state.data = action.payload;
            

        })
        .addCase(GalleryData.rejected,(state)=>{
            state.status = 'failed'
        })
    }
}

)
export default getGallerySlice.reducer;