import React from 'react'
import {getStudentsList} from '../../lib/API'
import './style.css';
import { Link, Route } from 'react-router-dom'
import Student from '../Student/Student'
import Newstudent from '../Newstudent/Newstudent'


export default class Students_table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            students: [],
        }
    }

    componentDidMount() {
        getStudentsList().then(response => {
            const data = response.data.students;
            this.setState({ students: data });
            console.log(response)
        })
    };


    render() {
        const { students} = this.state;
        return (
            <div>
                <h1>Hogwarts students CRM</h1>
                <table>
                    <thead>
                        <th>ID</th>
                        <th>First name</th>
                        <th>Last name</th>
                        {/* <th>Existing magic skills</th>
                        <th>Desired magic skills</th> */}
                        <th>Course</th>
                    </thead>
                    <tbody>
                    {students.map((student) => {
                        return(
                            <tr>
                                <td key={student.studentid}>
                                    <Link to={`/students/${student.studentid}`}>{student.studentid}
                                    </Link>
                                </td>
                                <td key={student.studentid}>{student.firstname}</td>
                                <td key={student.studentid}>{student.lastname}</td>
                                {/* <td key={student.studentid}>{student.existing_magic_skillz.value}</td>
                                <td key={student.studentid}>{student.desired_magic_skillz.value}</td> */}
                                <td key={student.studentid}>{student.intrested_in_course}</td>
                            </tr>    
                    )
                })}
                
                  </tbody>
                 </table>
                 <Link to="/newstudent">
                    <button type="button">
                        Add new Student
                    </button>
                </Link>
                {/* <Route path={`/students/newstudent`} component={Newstudent}/> */}
                {/* <Route path={`/students/:studentid`} component={Student}/> */}
        </div>
        )}
}

{/* <Link to={`/students/${student.id}`}>{student.name}</Link> */}