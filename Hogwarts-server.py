from flask import Flask, request, jsonify
from students import StudentsData, Student
from json import JSONEncoder
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

students_data = StudentsData()


class MyEncoder(JSONEncoder):
        def default(self, o):
            print(o.__dict__)
            return o.__dict__


@app.route('/students', methods=["GET", "POST"])
def handle_students():
    if request.method == "GET":
        return get_students()
    if request.method == "POST":
        return new_student()


def get_students():
    return jsonify(students=list(students_data.get_students().values()))


@app.route('/students/<studentid>', methods=["GET", "DELETE", "PUT"])
def handle_student(studentid):
    if request.method == "GET":
        return get_student(studentid)
    if request.method == "DELETE":
        return remove_student(studentid)
    if request.method == "PUT":
        return update_student()


def get_student(studentid):
    return jsonify(students_data.get_student(studentid))


def remove_student(studentid):
    student = get_student(studentid)
    students_data.remove_student(studentid)
    return student


def new_student():
    req_data = request.get_json()
    student = Student(req_data["firstname"], req_data["lastname"], req_data["existing_magic_skillz"],
                      req_data["desired_magic_skillz"], req_data["intrested_in_course"])
    students_data.add_student(student)
    return get_student(student.studentid)


def update_student():
    req_data = request.get_json()
    student = Student(firstname=req_data["firstname"], lastname=req_data["lastname"], studentid=req_data["studentid"],
                      existing_magic_skillz=req_data["existing_magic_skillz"],
                      desired_magic_skillz=req_data["desired_magic_skillz"],
                      intrested_in_course=req_data["intrested_in_course"], creationtime=req_data["creationtime"])
    students_data.update_student(student)
    return get_student(student.studentid)


if __name__ == '__main__':
    app.json_encoder = MyEncoder
    app.run()
