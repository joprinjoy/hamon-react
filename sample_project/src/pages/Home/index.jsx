import { useState } from "react"
import {useNavigate } from "react-router-dom";
import Register from "../Register/Register";
import Counter from "./components/Counter";



const Home = ()=>{
    const [count,setCount]= useState(0);
   
    const buttonClickHandle = ()=>{
        setCount(
            (count)=>
                count+1  
        )
    }
const navigate = useNavigate()
    return(
    <>
    
    <h1>This is home..</h1>
    <p>Lets count</p>
    
    <div>
    <button onClick={buttonClickHandle}>Count {count} </button>
    </div>
        
    <Register/>
    <Counter/>
    <button onClick={()=>navigate('/cat')}>Cat page</button>
    
    
    

    
    
    </>
    )
}
export default Home

