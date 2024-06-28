import { useState } from "react"
import Register from "../Register/Register";



const Home = ()=>{
    const [count,setCount]= useState(0);
   
    const buttonClickHandle = ()=>{
        setCount(
            (count)=>
                count+1  
        )
    }
    return(
    <>
    <h1>This is home..</h1>
    <p>Lets count</p>
    
    <div>
    <button onClick={buttonClickHandle}>Count {count} </button>
    </div>
        
    <Register/>
    
    </>
    )
}
export default Home

