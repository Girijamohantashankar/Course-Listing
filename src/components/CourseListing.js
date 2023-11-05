import React, { useState } from "react";
import sampleCourses from "../data";
import "./CourseListing.css";

function CourseListing() {
  const [search, setSearch] = useState("");
  const [courses, setCourses] = useState(sampleCourses);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    const filteredCourses = sampleCourses.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCourses(filteredCourses);
  };

  return (
    <div className="Course_listing">
      <div className="input-search">
        <h1>Course Listing</h1>
        <input
          type="text"
          placeholder="Search by course name"
          value={search}
          onChange={handleSearch}
        />
      </div>

      <ul className="course_list">
        {courses.map((course) => (
          <li key={course.id} className="list_card">
            <img
              src={course.image}
              alt={course.name}
              
            />
            <br></br>
            <button class="button"><a href={`/course/${course.id}`}>{course.name} Details</a></button>
            <p>Instructor: {course.instructor}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseListing;
