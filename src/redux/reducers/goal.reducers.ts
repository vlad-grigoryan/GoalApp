import {
  ADD_GOAL,
  SET_SELECTED_GOAL,
  INCREASE_GOAL,
  EDIT_GOAL,
  CHANGE_SELECTED_GOAL_BACKGROUND,
  DELETE_GOAL,
} from '../types';
import {
  ReducerAction,
  ReducerState,
  GoalBlockInterface,
} from '../../interfaces';

export const initialState = {
  goals: [] as GoalBlockInterface[],
  selectedGoal: {} as GoalBlockInterface,
  selectedIndex: 0,
};

export const GoalReducer: (
  state: ReducerState,
  action: ReducerAction,
) => ReducerState = (
  state: ReducerState = initialState,
  action: ReducerAction,
) => {
  switch (action.type) {
    case INCREASE_GOAL: {
      return {
        ...state,
        goals: [
          ...state.goals.slice(0, action.payload.selectedIndex),
          {
            ...state.goals[action.payload.selectedIndex],
            current:
              state.goals[action.payload.selectedIndex].current +
              state.goals[action.payload.selectedIndex].goal / 10,
          },
          ...state.goals.slice(action.payload.selectedIndex + 1),
        ],
      };
    }
    case ADD_GOAL:
      return {
        ...state,
        goals: [...state.goals, action.payload],
      };
    case EDIT_GOAL:
      return {
        ...state,
        goals: [
          ...state.goals.slice(0, state.selectedIndex),
          {
            ...action.payload,
          },
          ...state.goals.slice(state.selectedIndex + 1),
        ],
      };
    case SET_SELECTED_GOAL:
      return {
        ...state,
        selectedGoal: action.payload.selectedGoal,
        selectedIndex: action.payload.selectedIndex,
      };
    case CHANGE_SELECTED_GOAL_BACKGROUND:
      return {
        ...state,
        goals: [
          ...state.goals.slice(0, action.payload.selectedIndex),
          {
            ...state.goals[action.payload.selectedIndex],
            bgIndex: action.payload.bgIndex,
          },
          ...state.goals.slice(action.payload.selectedIndex + 1),
        ],
      };
    case DELETE_GOAL:
      return {
        ...state,
        goals: [
          ...state.goals.slice(0, action.payload.selectedIndex),
          ...state.goals.slice(action.payload.selectedIndex + 1),
        ],
      };
    default:
      return state;
  }
};

export default GoalReducer;
