import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Catpage from './pages/catpage/Catpage'
import Counter from './store/counter'
import Ekart from './pages/ecart'
import Addproduct from './pages/ecart/AddProduct'
import EcartDeleteItem from './pages/ecart/EcartDeleteItem'
import NavBar from './components/Navbar'

function App() {

                // simple component data  with state data and it send props to Dashboard component.
                // should be avoid writing code in App.jsx
                const [data,setData]  = useState([{
                    id:1,name:'joe',email:'joe@gmail.com',city:'Kottayam' }]);

                const [index,setIndex] = useState(0)

                const tableData = [
                    {id:2,name:'joprin',email:'joprin@gmail.com',city:'mundakayam'},
                    {id:3,name:'binu',email:'binu@gmail.com',city:'kochi'},
                    {id:4,name:'ivy',email:'ivy@gmail.com',city:'angamaly'}
                ]
                const handleSetData = ()=>{
                  if (index < tableData.length){

                      setData(
                          [...data , tableData[index]])
                      setIndex(index+1)
                  }
                  
                }
  return (
    <>
    
    
      {/* Routes points to correct component and accesed py path */}
      <Router>
      <NavBar/>
        <Routes>
          {/* <Route  path='/' element={<NavBar/>}/> */}
          <Route  path='/' element={<Home/>}/>
          <Route  path='/cat' element={<Catpage/>}/>
          <Route  path='/counter' element={<Counter/>}/>
          <Route  path='/ecart' element={<Ekart/>}/>
          <Route  path='/addproduct' element={<Addproduct/>}/>
          <Route  path='/deleteproduct' element={<EcartDeleteItem/>}/>
          



          {//setting prop along with component call 
          }
          <Route path ='/dashboard' element= {<Dashboard handleSetData={handleSetData} data={data}/>}/>

          

        </Routes>
      </Router>
      
      
      
      
    </>
  )
}

export default App
