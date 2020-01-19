import React, { Component } from 'react'
import {getStudentsByDay} from "../../lib/API";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

export default class StudentByDay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            formatedData: [],
        }
    }
    componentDidMount() {
        getStudentsByDay().then(response => {
            const data = response.data;
            console.log(data)
            Object.entries(data).map(([key, val]) => (this.state.formatedData.push({name: key, count: val})));
            this.setState({ data: data });
            // this.setState({formatedData: formatedData})
        })
    };
    render() {
        if(this.state.formatedData.length > 0){
        console.log("Hi there" + this.state.formatedData);
        return (
            <BarChart className="stats" width={600} height={300} data={this.state.formatedData}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
           <CartesianGrid strokeDasharray="3 3"/>
           <XAxis dataKey="name"/>
           <YAxis/>
           <Tooltip/>
           <Legend />
           <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        );
    
    }
    return (<img src = "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"/>)}
   
}
