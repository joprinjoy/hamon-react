import axios from "axios"; 



export const getGalleryData = ()=>{

    const url = import.meta.env.VITE_API_URL
    return(
        axios.get(url).then(
            (res)=>{
                
                return res;
            },
            (error)=>{
                console.log(error,'errrrrrr!!!!')
            }
        )
    )
}