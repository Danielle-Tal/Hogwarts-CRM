import React from 'react'
import { Link } from "react-router-dom";
import "./Welcomestyle.css";


export default function Welcome() {
    return (
        <div>
            <h1 className= "headline">Welcome to Hogwarts CRM</h1>
            <Link to="/students">
            <button className="Button" type="button"> Student Managment</button>
            </Link>
            <Link to="/statistics">
            <button className="Button" type="button"> Student statistics</button>
            </Link>
        </div>
    )
}
