import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard/Dashboard'

import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

                const [data,setData]  = useState([{
                    id:1,name:'joe',email:'joe@gmail.com',city:'Kottayam' }]);

                const [index,setIndex] = useState(0)

                const tableData = [
                    {id:2,name:'joprin',email:'joprin@gmail.com',city:'mundakayam'},
                    {id:3,name:'binu',email:'binu@gmail.com',city:'kochi'},
                    {id:4,name:'ivy',email:'ivy@gmail.com',city:'angamaly'}
                ]
                // const nullData = [
                //   {id:0,name:'null',email:'null',city:'null'}
                // ]


                const handleSetData = ()=>{
                  if (index < tableData.length){

                      setData(
                          [...data , tableData[index]])
                      setIndex(index+1)
                  }
                  
                }
  return (
    <>
    

      <Router>
        <Routes>
          <Route  path='/' element={<Home/>}/>
          {//setting prop along with component call 
          }
          <Route path ='/dashboard' element= {<Dashboard handleSetData={handleSetData} data={data}/>}/>

          
        </Routes>
      </Router>
      
      
    </>
  )
}

export default App
