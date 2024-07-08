import { useDispatch,useSelector } from "react-redux"
import { ecartData } from "../../store/ecart"
import { useEffect ,useState} from "react"
import './ekart.css'


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import {Button} from '@mui/material';

import Addproduct from "./AddProduct";
import { useNavigate } from "react-router-dom";

const Ekart = ()=>{
    // dispatch used to make updats in store
    const dispatch = useDispatch()
    const navigate = useNavigate()
   

    const [openUpdateCart, setOpenUpdateCart] = useState(false);

     // useselector user to take data from store
    const ecartPaylodData = useSelector((state)=>state.ecart.data)
    // const isLoading =useSelector((state)=>state.ecart.status)

    // call the dispatch call once everytime this component is rendered
    useEffect(()=>{
            dispatch(ecartData());
    },[dispatch])

    const handleClickUpdate = ()=>{
      
      setOpenUpdateCart(true);
    }

    const handleCloseUpdateEcart = () => {
      setOpenUpdateCart(false);
      dispatch(ecartData());
      
    };
  
    const handleButtonDelete = ()=>{
      navigate('/deleteproduct')
    }


    return (
        <>
        
        {ecartPaylodData.length>=0 ?(    
            
        <>

          <h1>Ecart</h1>
          <p><Button style={{
        
        backgroundColor:"green",
        color:"white",
        padding: "10px 36px",
        fontSize: "18px"
    }} onClick={handleClickUpdate}>Add Item </Button> |  <Button style={{
        
      backgroundColor:"red",
      color:"white",
      padding: "10px 36px",
      fontSize: "18px"
  }}onClick={handleButtonDelete}>Delete Item </Button></p>
          <TableContainer component={Paper}>
                <Table sx={{ minWidth: 800}} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="right">Sl.No</TableCell>
                      <TableCell align="right">Name</TableCell>
                      <TableCell align="right">Price</TableCell>
                      <TableCell align="center">Image</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {ecartPaylodData.map((row, index) => (
                      <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell variant="Tablecell" align="right">{index + 1}</TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                        <TableCell align="right"><img src={row.image_ur} alt={row.name} style={{ width: '300px', height: '300px' }} /></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
          </TableContainer>



          <Addproduct
            open={openUpdateCart}
            handleClose={handleCloseUpdateEcart}  
          />
        </>
        ):
      <div>Error Loading</div>}


        
        </>
    )
}
export default Ekart

