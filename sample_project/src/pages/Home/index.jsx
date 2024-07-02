import { useState } from "react"
import {useNavigate } from "react-router-dom";
import Register from "../Register/Register";
import Counter from "./components/Counter";
import Button from '@mui/material/Button';





const Home = ()=>{
    const [count,setCount]= useState(0);

    // importing the value of the url from .env for reference
    const apiUrl = import.meta.env.VITE_API_URL

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
    <Button variant="contained" onClick={buttonClickHandle}>Count {count} </Button>
    </div>
        <div>
            
            <p>Url : {apiUrl} </p>
        
        </div>
    <Register/>
    <Counter/>
    <button onClick={()=>navigate('/cat')}>Cat page</button>
    
    
    

    
    
    </>
    )
}
export default Home

