import { useDispatch,useSelector } from "react-redux"
import { ecartData } from "../../store/ecart"
import { useEffect } from "react"
import { deleteCartItem } from "../../store/ecartupdate"
import './ekart.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const EcartDeleteItem = ()=>{

    
    const dispatch = useDispatch()

    const ecartPaylodData = useSelector((state)=>state.ecart.data)
    const isLoading =useSelector((state)=>state.ecart.status)


    useEffect(()=>{
            dispatch(ecartData());
    },[dispatch])

    const deleteSuccess =() =>{
      dispatch(ecartData());
    }
   const handleDeleteClick = (id)=>{
    dispatch(deleteCartItem({id:id,
      successCB:deleteSuccess
    }));

   }

    return (
        <>
        {console.log({isLoading})}
        {ecartPaylodData.length>=0 ?(    
            
        <>

          <h1>Ecart <span className="delete_text">Delete</span> </h1>
          <TableContainer component={Paper}>
                <Table sx={{ minWidth: 800}} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="right">Sl.No</TableCell>
                      <TableCell align="right">Name</TableCell>
                      <TableCell align="right">Price</TableCell>
                      <TableCell align="center">Image</TableCell>
                      <TableCell align="center">Action</TableCell>

                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {ecartPaylodData.map((row, index) => (
                      <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell variant="Tablecell" align="right">{index + 1}</TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                        <TableCell align="right"><img src={row.image_ur} alt={row.name} style={{ width: '300px', height: '300px' }} /></TableCell>
                        <TableCell align="right"><button onClick={()=>{handleDeleteClick(row.id)}}>Delete</button></TableCell>
                      </TableRow>

                    ))}
                  </TableBody>
                </Table>
          </TableContainer>

        </>
        ):
      <div>Error Loading</div>}
        
        </>
    )
}
export default EcartDeleteItem

