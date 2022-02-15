import debounceFrame from '../utils/Debounce.js';

const MyReact = () => {
  const options = {
    currentStateKey: 0,
    states: [],
    element: null,
    container: null,
  };

  const useState = (initState) => {
    const { currentStateKey: key, states } = options;
    if (states.length === key) states.push(initState);

    const state = states[key];

    const setState = (newState) => {
      states[key] = newState;
      _render();
    };

    options.currentStateKey++;

    return [state, setState];
  };

  const render = (element, container) => {
    options.element = element;
    options.container = container;

    _render();
  };

  const _render = debounceFrame(() => {
    const { element, container } = options;
    if (!element || !container) return;

    container.innerHTML = element();
    options.currentStateKey = 0;
  });

  return { useState, render };
};

export const { useState, render } = MyReact();
