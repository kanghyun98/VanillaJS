import updateElement from './updateElement.js';

class Component {
  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.state;

    this.setup();
    this.render();
  }

  setup() {}

  template() {
    return '';
  }

  render() {
    const newNode = this.$target.cloneNode(true);
    newNode.innerHTML = this.template();

    updateElement(document.body, newNode, this.$target);

    // const oldChildNodes = [...this.$target.childNodes];
    // const newChildNodes = [...newNode.childNodes];
    // const max = Math.max(oldChildNodes.length, newChildNodes.length);
    // for (let i = 0; i < max; i++) {
    //   updateElement(this.$target, newChildNodes[i], oldChildNodes[i]);
    // }

    requestAnimationFrame(() => this.setEvent());
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
