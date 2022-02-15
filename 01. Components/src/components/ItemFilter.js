import Component from '../core/Component.js';

class ItemFilter extends Component {
  template() {
    return `
      <button class="filterBtn" data-filter-mode="0">전체 보기</button>
      <button class="filterBtn" data-filter-mode="1">활성 보기</button>
      <button class="filterBtn" data-filter-mode="2">비활성 보기</button>
    `;
  }

  setEvent() {
    const { filterItem } = this.props;

    this.addEvent('click', '.filterBtn', (e) => {
      filterItem(Number(e.target.dataset.filterMode));
    });
  }
}

export default ItemFilter;
