import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// recieving PropTypes from 'prop-types';
const Dashboard = ({handleSetData,data}) => {
   

    return(
        <>
        <h2> Magic Table </h2>

        <div >
        <button onClick={handleSetData}>Next</button>
        </div>
        
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 ,border:2}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                      <TableCell align="center">Sl.No</TableCell>
                      <TableCell align="center">Name</TableCell>
                      <TableCell align="center">Email</TableCell>
                      <TableCell align="center">City</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item, indx) => (
                      <TableRow
                        key={indx}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell align="center">{item.id}</TableCell>
                        <TableCell align="center">{item.name}</TableCell>
                        <TableCell align="center">{item.email}</TableCell>
                        <TableCell align="center">{item.city}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
            </Table>
        </TableContainer>

        </>
        
    )
}





//prop validation

// Dashboard.propTypes = {
//     handleSetData: PropTypes.func.isRequired,
//     data: PropTypes.shape({
//       name: PropTypes.string,
//       email: PropTypes.string,
//       city: PropTypes.string
//     }).isRequired,
    
//   };
export default Dashboard