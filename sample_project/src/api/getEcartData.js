import axios from "axios";


// api call fuction  get the gata from backend and returns it
export const getEcartData =() => {
    const url = `${import.meta.env.VITE_ECART_BASE__URL}/products`
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

