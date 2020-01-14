import axios from 'axios';

export function getStudentsList() {
    return axios.get(`http://127.0.0.1:5000/students `);
}

export function getStudent(studentid) {
    return axios.get(`http://127.0.0.1:5000/students/${studentid} `);
}

export function createStudent() {
    return axios.post(`http://127.0.0.1:5000/`);
}

export function deleteStudent(studentid) {
    return axios.delete(`http://127.0.0.1:5000/students/${studentid} `);
}