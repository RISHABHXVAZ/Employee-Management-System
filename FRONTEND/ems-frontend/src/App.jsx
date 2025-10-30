import './App.css'
import DeleteEmployeeComponent from './components/DeleteEmployeeComponent'
import DepartmentComponent from './components/DepartmentComponent'
import EmployeeComponent from './components/EmployeeComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListDepartmentsComponent from './components/ListDepartmentsComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
       <Routes>
        <Route path='/' element= {<ListEmployeeComponent />}></Route>
        <Route path='/employees' element={<ListEmployeeComponent />}></Route>
        <Route path='/add-employee' element= {<EmployeeComponent />}></Route>
        <Route path='/edit-employee/:id' element = {<EmployeeComponent />}></Route>
        <Route path='/delete-employee/:id' element = {<DeleteEmployeeComponent />}></Route>
        <Route path='/departments' element = {<ListDepartmentsComponent/>}></Route>
        <Route path='/add-department' element = {<DepartmentComponent />}></Route>
       </Routes>

      <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
