import axios from "axios";

export const postEkartData = (data, successCB,errorCB)=>{
    const url = `${import.meta.env.VITE_ECART_BASE__URL}/product`
    console.log(data)
    return(
        axios.post(url, data).then(
            (res)=>{
               
                successCB()
               
                return res.data;
                

            },
            (error)=>{
                errorCB(error.response.data)
                
                
                return error
            }

        ))  
}

export const deleteEcartItem = ({id,successCB})=>{
    const url = `${import.meta.env.VITE_ECART_BASE__URL}/deleteproduct`
    console.log(id)
    return(
        
        axios.post(url,{id}).then(
            (res) =>{

                
                successCB()
                return res.data
            },
            (error)=>{
                
                return error
            }

        )

    )
}
