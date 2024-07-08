import  {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counter'
import getGalleryReducer from './gallery' 
import ecartReducer from './ecart'
import {ecartUpdateReducer,ecartDeleteReducer} from './ecartupdate'

export const store = configureStore({
        reducer:{
            
            counter : counterReducer,
            gallery : getGalleryReducer,
            ecart : ecartReducer,
            ecartupdatedata : ecartUpdateReducer,
            ecartDeleteItem : ecartDeleteReducer,
        },

})
