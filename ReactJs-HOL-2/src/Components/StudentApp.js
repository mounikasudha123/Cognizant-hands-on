import React, { Component } from 'react';
import Student from './Student';

class StudentApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { name: 'Ayesha Khan', rollNo: 'STU-101', grade: 'A' },
        { name: 'Rahul Verma', rollNo: 'STU-102', grade: 'B+' },
        { name: 'Priya Sharma', rollNo: 'STU-103', grade: 'A-' }
      ],
      name: '',
      rollNo: '',
      grade: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addStudent = () => {
    const { name, rollNo, grade, students } = this.state;
    if (!name || !rollNo || !grade) {
      return;
    }

    const newStudent = { name, rollNo, grade };
    this.setState({
      students: [...students, newStudent],
      name: '',
      rollNo: '',
      grade: ''
    });
  };

  render() {
    const { students, name, rollNo, grade } = this.state;

    return (
      <section className="student-app">
        <div className="panel student-panel">
          <h2>Student Management</h2>
          <p className="student-intro">
            This portal demonstrates React components, state, and rendering a list of student cards.
          </p>

          <div className="student-form">
            <div className="form-field">
              <label>Name</label>
              <input
                name="name"
                value={name}
                onChange={this.handleChange}
                placeholder="Student name"
              />
            </div>
            <div className="form-field">
              <label>Roll No</label>
              <input
                name="rollNo"
                value={rollNo}
                onChange={this.handleChange}
                placeholder="Student roll number"
              />
            </div>
            <div className="form-field">
              <label>Grade</label>
              <input
                name="grade"
                value={grade}
                onChange={this.handleChange}
                placeholder="Student grade"
              />
            </div>
            <button type="button" onClick={this.addStudent} className="add-button">
              Add Student
            </button>
          </div>

          <div className="students-grid">
            {students.map((student, index) => (
              <Student
                key={`${student.rollNo}-${index}`}
                name={student.name}
                rollNo={student.rollNo}
                grade={student.grade}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default StudentApp;
