import Component from './core/Component.js';
import { store } from './redux/store.js';
import { changeA, changeB } from './redux/action.js';

const InputA = () => `<input class="stateA" value="${store.getState().a}" />`;
const InputB = () => `<input class="stateB" value="${store.getState().b}" />`;
const SumResult = () =>
  `<p>a + b = ${store.getState().a + store.getState().b}</p>`;

class App extends Component {
  template() {
    return `
      ${InputA()}
      ${InputB()}
      ${SumResult()}
    `;
  }

  setEvent() {
    this.$target
      .querySelector('.stateA')
      .addEventListener('change', ({ target }) => {
        store.dispatch(changeA(Number(target.value)));
      });

    this.$target
      .querySelector('.stateB')
      .addEventListener('change', ({ target }) => {
        store.dispatch(changeB(Number(target.value)));
      });
  }
}

export default App;
