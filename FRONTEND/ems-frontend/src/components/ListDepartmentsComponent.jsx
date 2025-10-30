import React, { useEffect, useState } from 'react'
import { listDepartments } from '../services/DepartmentService'
import { Link, useNavigate } from 'react-router-dom'

const ListDepartmentsComponent = () => {

    const [department, setDepartment] = useState([])

    useEffect(() => { 
        getAllDepartments()}, []
    )

    function getAllDepartments(){
        listDepartments().then((response) => {
            setDepartment(response.data);
        }).catch(error => {
            console.error(error)
        });
    }

  return (
    <div className='container'> 
        <h2 className='text-center'>List Departments</h2>
        <Link to='/add-department' className='btn btn-primary mb-4'>Add Department</Link>
        <table className="table table-striped table ">
            <thead>
                <tr>
                    <th>DepartmentID</th>
                    <th>Department Name</th>
                    <th>Department Description</th>
                </tr>
            </thead>
            <tbody>
                {
                    department.map(department => 
                        <tr key={department.id}>
                            <td>{department.id}</td>
                            <td>{department.departmentName}</td>
                            <td>{department.departmentDescription}</td>
                        </tr>

                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListDepartmentsComponent