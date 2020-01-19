import React from 'react'
import {getStudent, updateStudent} from '../../lib/API'
import './style.css';

export default class Student extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            student : {}, 
            existing: "",
            desired:"",
        }
    }
        componentDidMount() {
        const url_id = window.location.pathname.split('/')
        getStudent(url_id[2]).then(response => { 
            const data = response.data;
            this.setState({ student: data });
        })
    };
    handleUpdateStudent() {
        updateStudent(this.state.student)
    }
    handleChangeFirstName(event) {
        const { student } = this.state;
        student.firstname = event.target.value
        this.setState({student : student});
    }
    
    handleChangeLastName(event) {
        const { student } = this.state;
        student.lastname = event.target.value
        this.setState({student : student});
    };
    handleChangeCourse(event) {
        const { student } = this.state;
        student.intrested_in_course = event.target.value
        this.setState({student : student});
    };
    handleChangeExistingvalue(event) {
        const { student } = this.state;
        let name = event.target.name
        student.existing_magic_skillz[name] = event.target.value
        this.setState({student : student});
    };
    handleChangeDesiredvalue(event) {
        const { student } = this.state;
        let name = event.target.name
        student.desired_magic_skillz[name] = event.target.value
        this.setState({student : student});
    };
    handleChangeExistingvalueAdd(event) {
        const { existing, student } = this.state;
        student.existing_magic_skillz[existing] = event.target.value
        this.setState({existing : ""});
        this.setState({student : student});
    };
    handleChangeExistingNameAdd(event) {
        const { student } = this.state;
        let name = event.target.name
        this.setState({existing:event.target.value })
    };
    handleChangeDesiredvalueAdd(event) {
        const { desired, student } = this.state;
        student.desired_magic_skillz[desired] = event.target.value
        this.setState({desired : ""});
        this.setState({student : student});
    };
    handleChangeDesiredNameAdd(event) {
        const { student } = this.state;
        let name = event.target.name
        this.setState({desired:event.target.value })
    };
 
    skillsList = ['Alchemy', 'Animation', 'Conjuror', 'Disintegration', 'Elemental', 'Healing', 'Illusion',
        'Immortality', 'Invisibility', 'Invulnerability', 'Necromancer', 'Omnipresent', 'Omniscient',
        'Poison', 'Possession', 'Self-Detonation', 'Summoning', 'Water Breathing',]
    levelList = [1, 2, 3, 4, 5]
    render() {
        const { student } = this.state;
        console.log( student);
        if (student.existing_magic_skillz){
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
                    <input type="text" value={student.lastname} onChange = {event => this.handleChangeLastName(event)}  />
                    </label>
                    <label>
                    Existing magic skills:
                    </label>
                    { 
                    Object.entries(student.existing_magic_skillz).map(([key, val]) => (
                        <div>
                     <input type="text" key={"eSkill_" +key} name={key} value={key} />
                     <input type="number"  min="1" max="5" key={"eValue_" +key} name={key} value= {val} onChange = {event => this.handleChangeExistingvalue(event)}/>
                     </div>)
                    )}
                     <select multiple size='1' name="Skills" onChange={(event) => this.handleChangeExistingNameAdd(event)}>
                {this.skillsList.map((skills) => {
                    return (
                        <option value={skills}>{skills}</option>
                    )
                })}
                </select>
                <label for='level'></label>
            <select size='1' name="level" disabled={this.state.existing == ""} onChange={(event) => this.handleChangeExistingvalueAdd(event)}>
            {this.levelList.map((level) => {
                return (
                    <option value={level}>{level}</option>
                )
            })}
            </select>
                    <label>
                    Desired magic skills:
                    { 
                    Object.entries(student.desired_magic_skillz).map(([key, val]) => (
                        <div>
                     <input type="text" key={"dSkill_" + key} name={key} value={key} />
                     <input type="number"  min="1" max="5" key={"dValue_" + key} name={key} value= {val} onChange = {event => this.handleChangeDesiredvalue(event)}/>
                     </div>)
                    )}
                    </label>
                    <select multiple  className="skill" size='1' name="Skills" onChange={(event) => this.handleChangeDesiredNameAdd(event)}>
                {this.skillsList.map((skills) => {
                    return (
                        <option value={skills}>{skills}</option>
                    )
                })}
                </select>
                <label for='level'></label>
            <select className="level" size='1' name="level" disabled={this.state.desired == ""} onChange={(event) => this.handleChangeDesiredvalueAdd(event)}>
            {this.levelList.map((level) => {
                return (
                    <option value={level}>{level}</option>
                )
            })}
            </select>
                    <label>
                    Intrested in course:
                    <input type="text" value={student.intrested_in_course} onChange = {event => this.handleChangeCourse(event)} />
                    </label>
                    <button type="submit" className='New-button' value="Submit" onClick={() => this.handleUpdateStudent()} >Submit </button>
                </form>
                
            </div>
        )
        
    }
    return(<img src = "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"/>)
}}

// {student.existing_magic_skillz.map(skill => {Object.entries(skill).map(([key, val]) =>{ 
//     <input type="text" key={key}>{key}: {val} ></input>} )})}