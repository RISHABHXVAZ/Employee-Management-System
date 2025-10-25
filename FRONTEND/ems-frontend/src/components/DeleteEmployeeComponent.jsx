import { useNavigate, useParams } from 'react-router-dom'
import { deleteEmployee, getEmployee } from '../services/EmployeeService';
const DeleteEmployeeComponent = () => {

    const navigator = useNavigate();
    const { id } = useParams();

    function handleButtons(e) {
        if (e == 'yes') {
            deleteEmployee(id).then((response) => {
            }).catch(error => {
                console.error(error)
            })
        }
        navigator('/employees')
    }
    return (
        
            <div className="modal show d-block" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Delete Employee</h5>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to delete this employee?</p>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-warning"
                                onClick={() => handleButtons('yes')}
                            >
                                Yes
                            </button>
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={() => handleButtons('no')}
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    )
}


export default DeleteEmployeeComponent