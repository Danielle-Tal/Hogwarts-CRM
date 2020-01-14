import React from 'react'
import Students_table from '../Students_table/Students_table'
import {getStudent} from '../../lib/API'
import { useParams } from 'react-router-dom'
import './style.css';

export default class Student extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            student : {
                studentid: "", 
                firstname: "",
                lastname: "", 
            }, 
        }
    }
        componentDidMount() {
        const url_id = window.location.pathname.split('/')
        getStudent(url_id[2]).then(response => {
            const data = response.data;
            this.setState({ student: data });
            console.log(response)
        })
    };
    handleChangeFirstName(event) {
        // const { student } = this.state;
        // student.firstname = event.target.value
        this.setState({student : {firstname: event.target.value}});
    //     this.setState(prevState => ({
    //           student: {                     // specific object of food object
    //             ...prevState.student,   // copy all pizza key-value pairs
    //             firstname: event.target.value         // update value of specific key
    // }}))
            };
    render() {
        const { student} = this.state;
        return (
            
            <div>
                <h1>Student ID: {student.studentid}</h1>
                <p>Creation time: {student.creationtime}</p>
                <p>Last updated time: {student.last_updated_time}</p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Name:
                    <input type="text" value={student.firstname} onChange = {event => this.handleChangeFirstName(event)} />
                    </label>
                    <label>
                    Last Name:
                    <input type="text" value={student.lastname}  />
                    </label>
                    <label>
                    Existing magic skills:
                    <input type="text" value={student.existing_magic_skillz}  />
                    </label>
                    <label>
                    Desired magic skills:
                    <input type="text" value={student.desired_magic_skillz}  />
                    </label>
                    <label>
                    Intrested in course:
                    <input type="text" value={student.intrested_in_course}  />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                
            </div>
        )
    }
}
