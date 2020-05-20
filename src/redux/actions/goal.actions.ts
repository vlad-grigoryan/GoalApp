import {
  ADD_GOAL,
  EDIT_GOAL,
  INCREASE_GOAL,
  DELETE_GOAL,
  SET_SELECTED_GOAL,
  CHANGE_SELECTED_GOAL_BACKGROUND,
} from '../types';

export const increaseGoal = (selectedIndex: number) => (dispatch: any) => {
  dispatch({
    type: INCREASE_GOAL,
    payload: {selectedIndex},
  });
};

export const setSelectedGoal = (selectedGoal: any, selectedIndex: number) => (
  dispatch: any,
) => {
  dispatch({
    type: SET_SELECTED_GOAL,
    payload: {selectedGoal, selectedIndex},
  });
};

export const addGoal = (selectedGoal: any) => (dispatch: any) => {
  dispatch({
    type: ADD_GOAL,
    payload: selectedGoal,
  });
};

export const editGoal = (selectedGoal: any) => (dispatch: any) => {
  dispatch({
    type: EDIT_GOAL,
    payload: selectedGoal,
  });
};
export const changeGoalBackground = (
  backgroundIndex: number,
  selectedIndex: number,
) => (dispatch: any) => {
  dispatch({
    type: CHANGE_SELECTED_GOAL_BACKGROUND,
    payload: {backgroundIndex, selectedIndex},
  });
};

export const removeGoal = (selectedIndex: number) => (dispatch: any) => {
  dispatch({
    type: DELETE_GOAL,
    payload: {selectedIndex},
  });
};
