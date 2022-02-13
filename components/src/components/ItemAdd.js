import Component from '../core/Component.js';

class ItemAdd extends Component {
  template() {
    return `
      <form class="addForm">
        <input type="text" class="inputBox" placeholder="입력하세요" />
      </form>
    `;
  }

  setEvent() {
    const { addItem } = this.props;

    this.addEvent('submit', '.addForm', (e) => {
      e.preventDefault();
      addItem();
    });
  }
}

export default ItemAdd;
