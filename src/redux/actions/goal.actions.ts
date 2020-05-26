import {
  ADD_GOAL,
  EDIT_GOAL,
  INCREASE_GOAL,
  DELETE_GOAL,
  SET_SELECTED_GOAL,
  CHANGE_SELECTED_GOAL_BACKGROUND,
} from '../types';
import {Dispatch} from 'redux';
import {GoalBlock} from '../../interfaces';

export const increaseGoal = (selectedIndex: number) => (dispatch: Dispatch) => {
  dispatch({
    type: INCREASE_GOAL,
    payload: {selectedIndex},
  });
};

export const setSelectedGoal = (
  selectedGoal: GoalBlock,
  selectedIndex: number,
) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_SELECTED_GOAL,
    payload: {selectedGoal, selectedIndex},
  });
};

export const addGoal = (selectedGoal: GoalBlock) => (dispatch: Dispatch) => {
  dispatch({
    type: ADD_GOAL,
    payload: selectedGoal,
  });
};

export const editGoal = (selectedGoal: GoalBlock) => (dispatch: Dispatch) => {
  dispatch({
    type: EDIT_GOAL,
    payload: selectedGoal,
  });
};
export const changeGoalBackground = (
  backgroundIndex: number,
  selectedIndex: number,
) => (dispatch: Dispatch) => {
  dispatch({
    type: CHANGE_SELECTED_GOAL_BACKGROUND,
    payload: {backgroundIndex, selectedIndex},
  });
};

export const removeGoal = (selectedIndex: number) => (dispatch: Dispatch) => {
  dispatch({
    type: DELETE_GOAL,
    payload: {selectedIndex},
  });
};
