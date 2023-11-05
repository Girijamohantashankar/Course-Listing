import { ADD_COURSE, MARK_COMPLETED } from '../actions/types';
import sampleCourses from '../data';
const initialState = {
  courses: sampleCourses,
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COURSE:
      return {
        ...state,
        courses: [...state.courses, action.payload],
      };
    case MARK_COMPLETED:
      const courseIdToMarkAsCompleted = action.payload;
      const updatedCourses = state.courses.map((course) => {
        if (course.id === courseIdToMarkAsCompleted) {
          return { ...course, completed: true }; 
        }
        return course;
      });
      return {
        ...state,
        courses: updatedCourses,
      };
    default:
      return state;
  }
};

export default courseReducer;
