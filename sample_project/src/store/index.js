import  {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counter'
import getGalleryReducer from './gallery' 

export const store = configureStore({
        reducer:{
            //counter??
            counter : counterReducer,
            gallery : getGalleryReducer
        },

})
