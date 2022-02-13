import { observable, observe } from './Observer.js';

class Component {
  constructor($target, props) {
    this.state;
    this.$target = $target;
    this.props = props;

    this.setup();
  }

  setup() {
    this.state = observable(this.initState()); // state 관찰

    // state 변경 시, 실행
    observe(() => {
      this.render();
      this.setEvent();
      this.mounted();
    });
  }

  initState() {
    return {};
  }

  mounted() {}

  template() {
    return '';
  }

  render() {
    this.$target.innerHTML = this.template();
  }

  setEvent() {}

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  addEvent(eventType, selector, callback) {
    const isTarget = (target) => {
      return target.classList.contains(selector) || target.closest(selector);
    };

    this.$target.addEventListener(eventType, (e) => {
      if (!isTarget(e.target)) return;
      callback(e);
    });
  }
}

export default Component;
