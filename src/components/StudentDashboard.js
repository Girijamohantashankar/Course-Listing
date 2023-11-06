import React, { useState } from 'react';
import "./StudentDashboard.css";

function StudentDashboard({ enrolledCourses }) {
 const [courses, setCourses] = useState(enrolledCourses);
  const markCompleted = (courseId) => {
    const updatedCourses = courses.map((course) => {
      if (course.id === courseId) {
        return { ...course, completed: true };
      }
      return course;
    });
    setCourses(updatedCourses);
  }

  return (
    <div className='student-dashboard'>
      <h1>Student Dashboard</h1>
      <ol className='student-course'>
        {courses.map((course) => (
          <li key={course.id}>
            <strong>{course.name}</strong> - {course.instructor}
        <br/>
        <img src={course.image} alt={course.name} width="200" height="150" />
            <p>Due Date: {course.dueDate}</p>
            <p>Progress: {course.progress}%</p>
            <button onClick={() => markCompleted(course.id)} disabled={course.completed}>
              {course.completed ? 'Completed' : 'Mark as Completed'}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default StudentDashboard;
