import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';


function AddForm(props) {

    const [student, setStudents] = useState({ id: "", name: "", course: "" })
    const params = useParams()
    
    const submitHandler = (e) => {
        e.preventDefault();
        if(params.id){
            updateStudent(student)
        }else{
            addStudent(student)
        }
    }

    const addStudent = (data) => {
        axios.post('http://localhost:9090/student', data)
            .then((res) => {
                toast.success('Add Students Successfully!')
                setStudents({ id: "", name: "", course: "" })
                document.getElementById("myForm").reset();
            })
            .catch(err => {
                toast.error("Something Went Wrong!");
                console.log(err);
            })
    }

    const updateStudent = (data) =>{
        axios.put(`http://localhost:9090/student/${params.id}`, data)
        .then((res) => {
            toast.success('Update Students Successfully!')
            setStudents({ id: "", name: "", course: "" })
            document.getElementById("myForm").reset();
        })
        .catch(err => {
            toast.error("Something Went Wrong!");
            console.log(err);
        })
    }

    useEffect(() => {
        if(params.id){
            axios.get(`http://localhost:9090/student/${params.id}`)
            .then((res) => {
                toast.success('Get Students Successfully!')
                setStudents({ id: res.data.id, name: res.data.name, course: res.data.course })
                document.getElementById("myForm").reset();
            })
            .catch(err => {
                toast.error("Something Went Wrong!");
                console.log(err);
            })
        }
    }, [])

    return (
        <div className="bg-light border p-5 shadow">
            <h2 className="text-center">{props.title} Student Form</h2>
            <form onSubmit={submitHandler} id="myForm" autoComplete="off">
                <div className="form-group">
                    <label htmlFor="id">Enter ID:</label>
                    <input required type="number" className="form-control" placeholder="Enter ID" id="id" name="id" value={student.id} onChange={(e) => { setStudents({ ...student, id: e.target.value }) }} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Enter Name:</label>
                    <input required type="text" className="form-control" placeholder="Enter name" id="name" name="name" value={student.name} onChange={(e) => { setStudents({ ...student, name: e.target.value }) }} />
                </div>
                <div className="form-group">
                    <label htmlFor="course">Enter course :</label>
                    <input required type="text" className="form-control" placeholder="Enter course" id="course" name="course" value={student.course} onChange={(e) => { setStudents({ ...student, course: e.target.value }) }} />
                </div>
                <div className="text-center">
                    <button type="submit" className="mx-1 btn btn-primary">{props.title} Student</button>
                    <button type="reset" onClick={()=>{setStudents({ id: "", name: "", course: "" })}} className="mx-1 btn btn-warning">Reste</button>
                    <Link to="/" className="mx-1 btn btn-info">Go To List</Link>
                </div>
            </form>
        </div>
    );
}

export default AddForm;