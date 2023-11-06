import { MARK_COMPLETED } from '../actions/types';

const initialState = {
  enrolledCourses: [],
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case MARK_COMPLETED:
      const courseIdToMarkAsCompleted = action.payload;
      const updatedEnrolledCourses = state.enrolledCourses.map((course) => {
        if (course.id === courseIdToMarkAsCompleted) {
          return { ...course, completed: true };
        }
        return course;
      });

      return {
        ...state,
        enrolledCourses: updatedEnrolledCourses,
      };

    default:
      return state;
  }
};

export default studentReducer;
