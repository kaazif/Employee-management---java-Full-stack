import './App.css'
import EmployeeComponets from './compents/EmployeeComponets'
import FooterEmployeeComponets from './compents/FooterEmployeeComponets'
import HeaderEmployeeComponets from './compents/HeaderEmployeeComponets'
import ListEmployeeComponets from './compents/ListEmployeeComponets'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <HeaderEmployeeComponets/>
      <Routes>
        {/* // http://localhost:3000 */}
        <Route path='/' element = { <ListEmployeeComponets /> }></Route>
        {/* // http://localhost:3000/employees */}
        <Route path='/employees' element = { <ListEmployeeComponets/> }></Route>

        {/* // http://localhost:3000/add-employee */}
        <Route path='/add-employee' element = { <EmployeeComponets/>}></Route>
         {/* // http://localhost:3000/edit-employee/1*/}
         <Route path='/edit-employee/:id' element = { <EmployeeComponets/>}></Route>
      </Routes>
      <FooterEmployeeComponets/>
      </BrowserRouter>
    </>
  )
}

export default App
