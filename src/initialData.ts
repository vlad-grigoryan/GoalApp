import {BackgroundModel} from './interfaces';

export const backgrounds: BackgroundModel[] = [
  {
    layers: [
      {
        colors: ['dodgerblue', 'darkviolet'],
        start: {x: 0.5, y: 0.25},
        end: {x: 0.5, y: 0.75},
      },
      {
        colors: ['rgba(0, 0, 0, 0)', 'lightcoral'],
        start: {x: 0.25, y: 0.25},
        end: {x: 0.75, y: 0},
      },
      {
        colors: ['rgba(0, 0, 0, 0)', 'tomato'],
        start: {x: 0.5, y: 0.75},
        end: {x: 1, y: 1},
      },
    ],
  },
  {
    layers: [
      {
        colors: ['red', 'blue', 'orange'],
        start: {x: 0.5, y: 0.25},
        end: {x: 0.5, y: 0.75},
      },
    ],
  },
  {
    layers: [
      {
        colors: ['yellow', 'orange'],
        start: {x: 0, y: 0},
        end: {x: 1, y: 1},
      },
    ],
  },
  {
    layers: [
      {
        colors: ['blue', 'green'],
        start: {x: 0.75, y: 0.25},
        end: {x: 0.25, y: 0.75},
      },
    ],
  },
  {
    layers: [
      {
        colors: ['red', 'green'],
        start: {x: 0, y: 0.25},
        end: {x: 1, y: 0.75},
      },
    ],
  },
];

export const goalsData = [
  {
    title: 'For Smoothie',
    deadline: new Date(),
    goal: 112000,
    current: 98000,
    bgIndex: 0,
  },
  {
    title: 'For Second Smoothie',
    deadline: new Date(),
    goal: 250000,
    current: 52000,
    bgIndex: 1,
  },
];

export const initialGoal = {
  title: 'new Goal',
  deadline: new Date(),
  goal: 5000,
  current: 0,
  bgIndex: 0,
};
