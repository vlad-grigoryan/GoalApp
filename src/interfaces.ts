type Actions =
  | 'ADD_GOAL'
  | 'SET_SELECTED_GOAL'
  | 'INCREASE_GOAL'
  | 'EDIT_GOAL'
  | 'CHANGE_SELECTED_GOAL_BACKGROUND'
  | 'DELETE_GOAL';

export interface ReducerAction {
  type: Actions;
  payload: any;
}

export interface ReducerState {
  goals: GoalBlockInterface[];
  selectedGoal: GoalBlockInterface;
  selectedIndex: number;
}

export interface GoalBlockInterface {
  id: number;
  title: string;
  deadline: Date;
  goal: number;
  current: number;
  bgIndex: number;
}
interface Background {
  colors: string[];
  start: {
    x: number;
    y: number;
  };
  end: {
    x: number;
    y: number;
  };
}

export interface BackgroundModel {
  layers: Background[];
}
