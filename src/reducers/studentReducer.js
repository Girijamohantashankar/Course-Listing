import { MARK_COMPLETED } from '../actions/types';

const initialState = {
  enrolledCourses: [],
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case MARK_COMPLETED:
      return state;
    default:
      return state;
  }
};

export default studentReducer;
