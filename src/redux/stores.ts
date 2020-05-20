import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import goalReducer from './reducers/goal.reducers';
import {goalsData} from '../initialData';
const middleware = [thunk];

const reducer = combineReducers({
  goal: goalReducer,
});

const persistedState = {
  goal: {
    goals: goalsData,
    selectedGoal: goalsData[0],
  },
};

const store = createStore(
  reducer,
  persistedState as any,
  compose(applyMiddleware(...middleware)),
);
export default store;
