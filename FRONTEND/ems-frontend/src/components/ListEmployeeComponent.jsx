import React, { useEffect, useState } from "react"
import { listEmployees } from "../services/EmployeeService"
import { useNavigate } from "react-router-dom"
import { deleteEmployee } from "../services/EmployeeService"

const ListEmployeeComponent = () => {

    const [employee, setEmployee] = useState([])
    const navigator = useNavigate()

    useEffect(() => {
        getAllEmployees()
    }, [])  // Empty dependency array, so it runs only once when the component is mounted.

    function getAllEmployees() {
        listEmployees().then((response) => {
            setEmployee(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewEmployee() {
        navigator('/add-employee')
    }

    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`)

    }

    function removeEmployee(id) {
        navigator(`/delete-employee/${id}`)
    }

    return (
        <div className="container">
            <h2 className="text-center">List of Employees</h2>
            <button className="btn btn-primary mb-6" onClick={addNewEmployee}>Add Employee</button>
            <table className="table table-striped table ">
                <thead>
                    <tr>
                        <th>EmployeeID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employee.map(employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td><button className="btn btn-primary mb-6 m-2" onClick={() => updateEmployee(employee.id)}>Update</button>
                                    <button className="btn btn-danger" onClick={() => removeEmployee(employee.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent