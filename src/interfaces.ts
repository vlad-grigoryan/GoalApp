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
  goals: GoalBlock[];
  selectedGoal: GoalBlock;
  selectedIndex: number;
}

export interface GoalBlock {
  id: number;
  title: string;
  deadline: Date;
  goal: number;
  current: number;
  backgroundIndex: number;
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
