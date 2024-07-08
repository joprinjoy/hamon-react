import { useState } from "react"
import Counter from "./components/Counter";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const Home = ()=>{
    const [count,setCount]= useState(0);
    

    const buttonClickHandle = ()=>{
        setCount(
            (count)=>
                count+1  
        )
    }
   

    // MUI Styling for Paragraph
    const StyledParagraph = styled(Typography)(({ theme }) => ({
        margin: theme.spacing(2),
        fontSize: '1rem',
        lineHeight: 1.5,
    }));


    return(
    <>
    
    <h1>This is home..</h1>

    <StyledParagraph variant="body1" >
      This app is developed by Joprin Joy as a summary of previous learning sessions. 
      A navigation bar is present on all pages for easy navigation. In this app, you can view 
      a simple product list named Ecart, which is styled with MUI. On the same page, you can add 
      more products and delete products as desired. The Add Product component is presented as a 
      modal using MUI. The Home button takes you to this page. The Cat Gallery showcases random 
      cats each time you refresh. The Magic Table is straightforward; every row is added when you 
      click the button. Explore Now.
    </StyledParagraph>


    <h4>This is a simple counter works on useState</h4>
    
    <div>
    <Button variant="contained" onClick={buttonClickHandle}>Count {count} </Button>
    </div>
        <div>
    
        
        </div>

    {/* rendering another component inside a component */}
    <Counter/>

    </>
    )
}
export default Home

