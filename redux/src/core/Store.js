import { observable } from './Observer.js';

const createStore = (reducer) => {
  const state = observable(reducer());

  const frozenState = {};

  Object.keys(state).forEach((key) => {
    Object.defineProperty(frozenState, key, {
      get: () => state[key],
    });
  });

  const dispatch = (action) => {
    const newState = reducer(state, action);

    for (const [key, val] of Object.entries(newState)) {
      if (state[key] === undefined) continue;

      state[key] = val;
    }
  };

  const getState = () => frozenState;

  return { getState, dispatch };
};

export default createStore;
