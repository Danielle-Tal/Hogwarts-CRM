import time


class Student:
    counter = 1

    def __init__(self, firstname, lastname, existing_magic_skillz,desired_magic_skillz,
                 intrested_in_course, creationtime=None, studentid=None):
        if studentid is None:
            self.studentid = str(Student.counter)
            Student.counter += 1
            self.creationtime = time.asctime(time.localtime(time.time()))
            self.last_updated_time = self.creationtime
        else:
            self.studentid = studentid
            self.creationtime = creationtime
            self.last_updated_time = time.asctime(time.localtime(time.time()))
        self.firstname = firstname
        self.lastname = lastname
        self.existing_magic_skillz = existing_magic_skillz
        self.desired_magic_skillz = desired_magic_skillz
        self.intrested_in_course = intrested_in_course


class StudentsData:
    def __init__(self):
        self.students = {"1": Student("Harry", "Potter", {"Healing": 4, "Poison": 2}, {"Water breathing": 3},
                                      "Alchemy basics"),
                         "2": Student("Ron", "Weisly", {"Illusion": 3, "Elemental": 1}, {"Invulnerability": 4},
                                      "Magic for day-to-day life"),
                         "3": Student("Hermaionie", "Grainger", {"Conjuror": 5, "Animation": 5, "Self-detonation": 2},
                                      {"Disintegration": 5}, "Dating with magic")}

    def get_students(self):
        return self.students

    def get_student(self, studentid):
        return self.students.get(studentid)

    def add_student(self, student):
        self.students[student.studentid] = student

    def remove_student(self, studentid):
        self.students.pop(studentid)

    def update_student(self, student):
        self.students[student.studentid] = student

    def amount_of_students_day(self):
        values = {}
        for student in self.students.values():
            current_day = time.strftime("%d-%m-%y", time.strptime(student.creationtime))
            if current_day in values:
                values[current_day] = values.get(current_day) + 1
            else:
                values[current_day] = 1
        return values





