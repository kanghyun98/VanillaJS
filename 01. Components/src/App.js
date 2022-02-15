import Component from './core/Component.js';
import Items from './components/Items.js';
import ItemAdd from './components/ItemAdd.js';
import ItemFilter from './components/ItemFilter.js';

class App extends Component {
  setup() {
    this.state = {
      filterMode: 0,
      items: [
        {
          id: 1,
          content: 'item1',
          active: false,
        },
        {
          id: 2,
          content: 'item2',
          active: true,
        },
      ],
    };
  }

  template() {
    return `
      <header class="item-add"></header>
      <main class="items"></main>
      <footer class="item-filter"></footer>
    `;
  }

  mounted() {
    const $itemAdd = this.$target.querySelector('.item-add');
    const $items = this.$target.querySelector('.items');
    const $itemFilter = this.$target.querySelector('.item-filter');

    new ItemAdd($itemAdd, {
      addItem: this.addItem.bind(this),
    });

    new Items($items, {
      filteredItems: this.filteredItems,
      deleteItem: this.deleteItem.bind(this),
      toggleItem: this.toggleItem.bind(this),
    });

    new ItemFilter($itemFilter, {
      filterItem: this.filterItem.bind(this),
    });
  }

  get filteredItems() {
    const { filterMode, items } = this.state;
    return items.filter(
      ({ active }) =>
        (filterMode === 1 && active) ||
        (filterMode === 2 && !active) ||
        filterMode === 0
    );
  }

  addItem() {
    const id = Date.now();
    const content = document.querySelector('.inputBox').value;
    const active = false;

    this.setState({
      items: [...this.state.items, { id, content, active }],
    });
  }

  deleteItem(idx) {
    const newItems = [...this.state.items];
    newItems.splice(idx, 1);
    this.setState({ items: newItems });
  }

  toggleItem(id) {
    const items = [...this.state.items];
    const index = items.findIndex((v) => v.id === id);
    items[index].active = !items[index].active;
    this.setState({ items });
  }

  filterItem(filterMode) {
    this.setState({ filterMode });
  }
}

export default App;
