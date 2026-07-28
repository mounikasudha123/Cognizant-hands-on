import React from 'react';

function Student({ name, rollNo, grade }) {
  return (
    <div className="student-card">
      <div className="student-card-header">
        <h3>{name}</h3>
      </div>
      <div className="student-card-body">
        <p><strong>Roll No:</strong> {rollNo}</p>
        <p><strong>Grade:</strong> {grade}</p>
      </div>
    </div>
  );
}

export default Student;
