import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import sampleCourses from '../data';
import "./CourseDetails.css"

function CourseDetails({ onEnrollCourse, enrolledCourses, setEnrolledCourses }) {
  const { id } = useParams();
  const course = sampleCourses.find((c) => c.id === parseInt(id));

  const [enrolled, setEnrolled] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!course) {
    return <div>Course not found</div>;
  }

  const enrollCourse = () => {
    if (loading) {
      return; 
    }

    setLoading(true);
    setTimeout(() => {
        try {
      console.log('Enrolling in course:', course);
      onEnrollCourse(course);
      if (Array.isArray(enrolledCourses)) {
        setEnrolledCourses([...enrolledCourses, course]);
      }

      setEnrolled(true);
    } catch (error) {
      console.error('Enrollment failed:', error);
    } finally {
      setLoading(false);
    }
  }, 1000);
  };

  return (
    <div className='Course_Details'>
      <h2>Course Details</h2>
      <h3>{course.name}</h3>
      <p>Instructor: {course.instructor}</p>
      <p>Description: {course.description}</p>
      <p>Status: {course.status}</p>
      <p>Duration: {course.duration}</p>
      <p>Schedule: {course.schedule}</p>
      <p>Location: {course.location}</p>
      <p>Prerequisites: {course.prerequisites}</p>
      <details>
        <summary>Syllabus</summary>
        <p>{course.syllabus}</p>
      </details>
      <button onClick={enrollCourse} disabled={enrolled || loading}>
        {loading ? 'Enrolling...' : enrolled ? 'Enrolled' : 'Enroll Now'}
      </button>
      <Link to="/dashboard">Go to Dashboard</Link>
      <img src={course.image} alt={course.name} />
     
    </div>
  );
}

export default CourseDetails;
