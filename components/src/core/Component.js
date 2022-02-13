class Component {
  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.state;

    this.setup();
    this.setEvent();
    this.render();
  }

  setup() {}
  mounted() {}

  template() {
    return '';
  }

  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
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
