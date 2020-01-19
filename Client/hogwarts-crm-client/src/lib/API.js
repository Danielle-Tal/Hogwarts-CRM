import axios from 'axios';

export function getStudentsList() {
    return axios.get(`http://127.0.0.1:5000/students `);
}

export function getStudent(studentid) {
    return axios.get(`http://127.0.0.1:5000/students/${studentid} `);
}

export function createStudent(student) {
    return axios.post(`http://127.0.0.1:5000/students`, student);
}

export function updateStudent(student) {
    return axios.put(`http://127.0.0.1:5000/students/${student.studentid} `, student);
}

export function deleteStudent(studentid) {
    return axios.delete(`http://127.0.0.1:5000/students/${studentid} `);
}

export function getStudentsByDay() {
    return axios.get(`http://127.0.0.1:5000/students/statistics `);
}