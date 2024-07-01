import axios from "axios";  


export const getGalleryData = ()=>{

    return(
        axios.get('https://api.thecatapi.com/v1/images/search').then(
            (res)=>{
                
                return res;
            },
            (error)=>{
                console.log(error,'errrrrrr!!!!')
            }
        )
    )
}