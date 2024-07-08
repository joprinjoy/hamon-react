import { useState } from "react"
import { postCartUpdate } from "../../store/ecartupdate"
import { useDispatch} from "react-redux"
import {useNavigate } from "react-router-dom"
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import {
    Dialog,
    DialogTitle,
    DialogContent,
   
  } from "@mui/material";



const Addproduct = ({ open, handleClose })=>{

const initialProductData = {
    name:"",category:"",price:"",image_url:""
}
const dispatch = useDispatch()
const navigate = useNavigate()
// const currentStatus = useSelector((state)=> state.ecartupdatedata.status)


const [product,setProduct]= useState(initialProductData)
const[errorMsg,setErrorMsg] = useState(null)



// function to be executed after success api call 
const handleSuccess =()=>{
    navigate('/ecart')
    setErrorMsg(null)
    handleClose()
}

// function to be executed after error in api call 
const handleError =(error)=>{
    console.log("error msg",error)
    setErrorMsg(error.error)
    
}

// data and other arguments should be passed as objects to make it as json iterable
// passing functions as arguments for callback  
const handleAddProduct = (e)=> {
    e.preventDefault();
    dispatch(postCartUpdate({
        data: product,
        successCB:handleSuccess,
        errorCB:handleError
    } ))
    
}


    return(
        <>

            <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Add Products</DialogTitle>
                    <DialogContent>
                    

                        <Box
                            component="form"
                            method="post"
                            sx={{
                                '& > :not(style)': { m: 1 },
                                backgroundColor: 'white',
                                padding: 6, // Add some padding for better visual spacing
                                borderRadius: 2, // Optional: add border radius for rounded corners
                            }}
                            noValidate
                            autoComplete="off"
                            >
                            <Input placeholder="Name" value={product.name}  onChange={(event)=>{setProduct({...product,name:event.target.value})}}/>
                            <Input placeholder="Category" value={product.category}  onChange={
                                        (event)=>{
                                            let newProduct = {
                                                ...product,
                                                category: event.target.value
                                            }
                                        setProduct(newProduct)
                                        }
                                        }/>
                            <Input placeholder="Price" value={product.price}  onChange={(event)=>{setProduct({...product,price:event.target.value})}}/>
                            <Input placeholder="Image URL" value={product.image_url}  onChange={(event)=>{setProduct({...product,image_url:event.target.value})}}/>
                            
                            <FormHelperText error sx={{ mt: 2 }}>
                                {errorMsg}
                                </FormHelperText>

                            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                <Button variant="contained" onClick={handleAddProduct}>Add Product</Button>
                                <Button onClick={handleClose} color="success">Cancel</Button>
                            </Box>
                        </Box>
                    </DialogContent>
                    
                </Dialog>
               
        </>
    )
}
export default Addproduct