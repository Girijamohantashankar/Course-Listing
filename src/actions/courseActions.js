import { ADD_COURSE, MARK_COMPLETED } from './types';

export const addCourse = (course) => {
  return {
    type: ADD_COURSE,
    payload: course,
  };
};

export const markCompleted = (courseId) => {
  return {
    type: MARK_COMPLETED,
    payload: courseId,
  };
}
