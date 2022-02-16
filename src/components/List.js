import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

function List() {
    const [students, setStucents] = useState([])

    useEffect(() => {
        getStudents()
    }, [])

    const getStudents = () => {
        axios.get('http://localhost:9090/students')
            .then(res => {
                setStucents(res.data);
                toast.success('Fetch All Students!')
            })
            .catch(err => {
                toast.error("Something Went Wrong!")
                console.log(err);
            })
    }

    const deleteStudent = (sid) => {
        axios.delete(`http://localhost:9090/student/${sid}`)
            .then(res => {
                setStucents(students.filter(std => std.id !== sid));
                toast.success('Delete Successfully!')
            })
            .catch(err => {
                toast.error("Something Went Wrong!")
                console.log(err);
            })
    }

    return (
        <div className="list">
            <div className="d-flex justify-content-between">
                <h2>All Students</h2>
                <Link to="/add" className="btn btn-primary align-self-center">+ Add User</Link>
            </div>
            <table className="table table-hover text-center table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.length > 0 ?
                            students.map(student => {
                                return <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.course}</td>
                                    <td>
                                        <Link className="action_btn fa fa-edit text-success px-1" to={`/edit/${student.id}`} title="Edit"></Link>
                                        <i className="action_btn fa fa-trash text-danger px-1" onClick={() => { deleteStudent(student.id) }} title="Delete"></i>
                                    </td>
                                </tr>
                            })
                            : <tr>
                                <td colSpan="4">No Data Found!</td>
                            </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}

export default List;