
class ItemListContainer extends React.Component {
    state = {
      items: [{ id: 1, text: "item 1" }, { id: 2, text: "item 2" }]
    };
  
    render() {
      const { items } = this.state;
      return <ItemList items={items} />;
    }
  }

  export default ItemListContainer;