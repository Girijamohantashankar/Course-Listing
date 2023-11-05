import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseListing from "./components/CourseListing";
import CourseDetails from "./components/CourseDetails";
import StudentDashboard from "./components/StudentDashboard";

function App() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enrollCourse = (course) => {
    setEnrolledCourses([...enrolledCourses, course]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CourseListing />} />
        <Route
          path="/course/:id"
          element={<CourseDetails onEnrollCourse={enrollCourse} />}
        />
        <Route
          path="/dashboard"
          element={<StudentDashboard enrolledCourses={enrolledCourses} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
