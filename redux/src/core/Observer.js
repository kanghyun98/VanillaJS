import debounceFrame from './Debounce.js';

let currentObserver = null;

export const observe = (func) => {
  currentObserver = debounceFrame(func);
  func();
  currentObserver = null;
};

export const observable = (obj) => {
  const observerMap = {};

  return new Proxy(obj, {
    get(target, name) {
      observerMap[name] = observerMap[name] || new Set();
      if (currentObserver) observerMap[name].add(currentObserver);
      return target[name];
    },
    set(target, name, value) {
      if (target[name] === value) return true;
      if (JSON.stringify(target[name]) === JSON.stringify(value)) return true;
      target[name] = value;
      observerMap[name].forEach((fn) => fn());
      return true;
    },
  });
};
