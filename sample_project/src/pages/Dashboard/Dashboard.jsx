// import PropTypes from 'prop-types';
const Dashboard = ({handleSetData,data}) => {


    return(
        <>
        <h2>This is Dashboard</h2>
        <button onClick={handleSetData}>Next</button>

        <table border={1}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                     <th>Email</th>
                    <th>City</th>
                </tr>
            </thead>
                
            <tbody>
            {
                data.map(
                    (item,indx)=>{
                        return(
                            <tr key={indx}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.city}</td>

                            </tr>
                        )
                    }
                )
            }
            </tbody>
            

        </table>

       
        
        </>
        
    )
}





//what

// Dashboard.propTypes = {
//     handleSetData: PropTypes.func.isRequired,
//     data: PropTypes.shape({
//       name: PropTypes.string,
//       email: PropTypes.string,
//       city: PropTypes.string
//     }).isRequired,
    
//   };
export default Dashboard