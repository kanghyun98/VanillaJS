import Component from '../core/Component.js';

class Items extends Component {
  template() {
    const { filteredItems } = this.props;

    return `
      <ul>
        ${filteredItems
          .map(({ id, content, active }) => {
            return `
              <li data-id="${id}">
                ${content}
                <button class="toggleBtn" style="color: ${
                  active ? 'blue' : 'red'
                }">
                  ${active ? '활성' : '비활성'}
                </button>
                <button class="delBtn">삭제</button>
              </li>
            `;
          })
          .join('')}
      </ul>
    `;
  }

  setEvent() {
    const { deleteItem, toggleItem } = this.props;

    this.addEvent('click', '.delBtn', (e) => {
      deleteItem(e.target.dataset.index);
    });

    this.addEvent('click', '.toggleBtn', (e) => {
      toggleItem(Number(e.target.closest('[data-id]').dataset.id));
    });
  }
}

export default Items;
