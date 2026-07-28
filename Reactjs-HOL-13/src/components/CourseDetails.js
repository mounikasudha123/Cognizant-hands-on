import React, { useState } from 'react';

/**
 * CourseDetails Component
 * Demonstrates conditional rendering using:
 * - Ternary operator (conditional ? true : false)
 * - Logical AND operator (&&)
 * - Multiple conditions
 */
function CourseDetails() {
  const [isCourseActive, setIsCourseActive] = useState(true);
  const [showCourseDetails, setShowCourseDetails] = useState(false);

  const courseData = {
    name: 'React Learning Path',
    instructor: 'John Doe',
    duration: '6 weeks',
    level: 'Beginner',
    isActive: isCourseActive,
    enrolledStudents: 450,
  };

  return (
    <div className="component-section">
      <h2 className="section-title">Course Details - Ternary & Logical AND Operators</h2>

      {/* Demo 1: Ternary Operator */}
      <div className="method-demo">
        <div className="method-title">1. Ternary Operator Method</div>
        <div className="method-description">
          Syntax: condition ? valueIfTrue : valueIfFalse
        </div>
        <button
          className="toggle-button"
          onClick={() => setIsCourseActive(!isCourseActive)}
        >
          Toggle Course Status
        </button>
        <div className="demo-output">
          {isCourseActive ? (
            <div>
              <span className="status-badge active">ACTIVE</span>
              <p>✅ Course is currently active and accepting enrollments.</p>
            </div>
          ) : (
            <div>
              <span className="status-badge inactive">INACTIVE</span>
              <p>❌ Course is currently inactive.</p>
            </div>
          )}
        </div>
      </div>

      {/* Demo 2: Logical AND Operator */}
      <div className="method-demo">
        <div className="method-title">2. Logical AND Operator Method</div>
        <div className="method-description">
          Syntax: condition && valueIfTrue
        </div>
        <button
          className="toggle-button"
          onClick={() => setShowCourseDetails(!showCourseDetails)}
        >
          {showCourseDetails ? 'Hide' : 'Show'} Course Details
        </button>
        <div className="demo-output">
          {showCourseDetails && (
            <div>
              <div className="card">
                <h3>{courseData.name}</h3>
                <p><strong>Instructor:</strong> {courseData.instructor}</p>
                <p><strong>Duration:</strong> {courseData.duration}</p>
                <p><strong>Level:</strong> {courseData.level}</p>
                <p><strong>Enrolled Students:</strong> {courseData.enrolledStudents}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Demo 3: Multiple Conditions */}
      <div className="method-demo">
        <div className="method-title">3. Multiple Conditions Combined</div>
        <div className="method-description">
          Combining both methods for complex rendering logic
        </div>
        <div className="demo-output">
          {isCourseActive && showCourseDetails ? (
            <div className="card">
              <h3>📚 {courseData.name}</h3>
              <p>Status: <span className="status-badge active">ACTIVE</span></p>
              <p>Instructor: <strong>{courseData.instructor}</strong></p>
              <p>Duration: <strong>{courseData.duration}</strong></p>
              <p>Level: 
                <span className="tag">{courseData.level}</span>
              </p>
            </div>
          ) : isCourseActive && !showCourseDetails ? (
            <p>✅ Course is active. Click "Show Course Details" to view more information.</p>
          ) : !isCourseActive ? (
            <p>❌ Course is inactive. Cannot display course details.</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
