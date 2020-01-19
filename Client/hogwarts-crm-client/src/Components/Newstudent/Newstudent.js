import React, { useState } from 'react'
import {createStudent} from '../../lib/API'
export default class NewStudent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            student : {existing_magic_skillz :{}, desired_magic_skillz:{}}, 
            existing: "",
            desired:"",
        }
    }
 
    courseList = ['Alchemy Basics', 'Alchemy Advanced', 'Magic for Day-to-Day Life',
        'Magic for Medical Professionals', 'Dating With Magic', 'Street Magic',]
    skillsList = ['Alchemy', 'Animation', 'Conjuror', 'Disintegration', 'Elemental', 'Healing', 'Illusion',
        'Immortality', 'Invisibility', 'Invulnerability', 'Necromancer', 'Omnipresent', 'Omniscient',
        'Poison', 'Possession', 'Self-Detonation', 'Summoning', 'Water Breathing',]
    levelList = [1, 2, 3, 4, 5]
    
    handleCreateStudent() {
       createStudent(this.state.student)
       this.setState({student : {existing_magic_skillz :{}, desired_magic_skillz:{}, firstname:"", lastname:"",intrested_in_course:"" }})
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
        const { existing, student } = this.state;
        student.existing_magic_skillz[existing] = event.target.value
        this.setState({existing : ""});
        this.setState({student : student});
    };
    handleChangeExistingName(event) {
        const { student } = this.state;
        let name = event.target.name
        this.setState({existing:event.target.value })
    };
    handleChangeDesiredvalue(event) {
        const { desired, student } = this.state;
        student.desired_magic_skillz[desired] = event.target.value
        this.setState({desired : ""});
        this.setState({student : student});
    };
    handleChangeDesiredName(event) {
        const { student } = this.state;
        let name = event.target.name
        this.setState({desired:event.target.value })
    };
    render() {
        const { student } = this.state;
    return (
        <div>
            <h1>New Student</h1>
            <label>
                Name
                <input type='text' name='first_name' onChange={(event) => this.handleChangeFirstName(event)} />
            </label>
            <label>
                Last Name
                <input type='text' name='last_name' onChange={(event) => this.handleChangeLastName(event)} />
            </label>
            <label for='Course'>Course</label>
            <select multiple size='1' name="Course" onChange={(event) => this.handleChangeCourse(event)}>
                {this.courseList.map((course) => {
                    return (
                        <option name={course}>{course}</option>
                    )
                })}
            </select>
            <label for='Skills'>Existing Skills</label>
            {Object.entries(student.existing_magic_skillz).map(([key, val]) => (
                        <div>
                     <input type="text" key={"eSkill_" +key} name={key} value={key} />
                     <input type="number"  min="1" max="5" key={"eValue_" +key} name={key} value= {val} onChange = {event => this.handleChangeExistingvalue(event)}/>
                     </div>))}
            <select multiple size='1' name="Skills" onChange={(event) => this.handleChangeExistingName(event)}>
                {this.skillsList.map((skills) => {
                    return (
                        <option value={skills}>{skills}</option>
                    )
                })}
            </select>
            <label for='level'></label>
            <select size='1' name="level" disabled={this.state.existing == ""} onChange={(event) => this.handleChangeExistingvalue(event)}>
            {this.levelList.map((level) => {
                return (
                    <option value={level}>{level}</option>
                )
            })}
            </select>
            <label for='desired skills'>Desired Skills</label>
            {Object.entries(student.desired_magic_skillz).map(([key, val]) => (
                        <div>
                     <input type="text" key={"eSkill_" +key} name={key} value={key} />
                     <input type="number"  min="1" max="5" key={"eValue_" +key} name={key} value= {val} onChange = {event => this.handleChangeExistingvalue(event)}/>
                     </div>))}
            <select multiple size='1' name="desired skills" onChange={(event) => this.handleChangeDesiredName(event)}>
                {this.skillsList.map((skills) => {
                    return (
                        <option value={skills}>{skills}</option>
                    )
                })}
            </select>
            <label for='level'></label>
            <select size='1' name="level" disabled={this.state.desired == ""} onChange={(event) => this.handleChangeDesiredvalue(event)}>
                {this.levelList.map((level) => {
                    return (
                        <option value={level}>{level}</option>
                    )
                })}
                </select>
            <button type='submit' className="New-button" name='Submit' onClick={() => this.handleCreateStudent()}>Send new student</button>
        </div>
    )
}}
