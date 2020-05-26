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
  deadline: string;
  goal: number;
  current: number;
  backgroundIndex: number;
}
