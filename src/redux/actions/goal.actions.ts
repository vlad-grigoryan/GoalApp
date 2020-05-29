import {
  ADD_GOAL,
  EDIT_GOAL,
  INCREASE_GOAL,
  DELETE_GOAL,
  SET_SELECTED_GOAL,
  CHANGE_SELECTED_GOAL_BACKGROUND,
} from '../types';
import {Dispatch} from 'redux';
import {GoalBlockInterface} from '../../interfaces';

export const increaseGoal = (selectedIndex: number) => (dispatch: Dispatch) => {
  dispatch({
    type: INCREASE_GOAL,
    payload: {selectedIndex},
  });
};

export const setSelectedGoal = (
  selectedGoal: GoalBlockInterface,
  selectedIndex: number,
) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_SELECTED_GOAL,
    payload: {selectedGoal, selectedIndex},
  });
};

export const addGoal = (selectedGoal: GoalBlockInterface) => (
  dispatch: Dispatch,
) => {
  dispatch({
    type: ADD_GOAL,
    payload: selectedGoal,
  });
};

export const editGoal = (selectedGoal: GoalBlockInterface) => (
  dispatch: Dispatch,
) => {
  dispatch({
    type: EDIT_GOAL,
    payload: selectedGoal,
  });
};
export const changeGoalBackground = (
  bgIndex: number,
  selectedIndex: number,
) => (dispatch: Dispatch) => {
  dispatch({
    type: CHANGE_SELECTED_GOAL_BACKGROUND,
    payload: {bgIndex, selectedIndex},
  });
};

export const removeGoal = (selectedIndex: number) => (dispatch: Dispatch) => {
  dispatch({
    type: DELETE_GOAL,
    payload: {selectedIndex},
  });
};
