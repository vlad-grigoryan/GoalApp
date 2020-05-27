import {Background} from './interfaces';

export const backgrounds: Background[] = [
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
    id: 0,
    title: 'For Smoothie',
    deadline: '25 May',
    goal: 112000,
    current: 98000,
    backgroundIndex: 0,
  },
  {
    id: 1,
    title: 'For Second Smoothie',
    deadline: '25 June',
    goal: 250000,
    current: 52000,
    backgroundIndex: 1,
  },
];
