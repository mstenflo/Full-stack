import {
  RECEIVE_ALL_STEPS,
  RECEIVE_STEP,
  REMOVE_STEP
} from "../actions/step_actions";

import { RECEIVE_RECIPE } from '../actions/recipe_actions';

const StepsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_ALL_STEPS:
      if (action.steps) {
        return action.steps;
      } else {
        return {};
      }
    case RECEIVE_STEP:
      nextState[action.step.id] = action.step;
      return nextState;
    case REMOVE_STEP:
      delete nextState[action.stepId];
      return nextState;
    default:
      return oldState;
  }
};

export default StepsReducer;