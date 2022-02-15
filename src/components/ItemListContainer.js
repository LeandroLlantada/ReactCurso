
const productos = [
  {
    id:1,
    nombre: "Arsenal",
    stock: 25,
    precio: 2500,
  },
  {
    id:2,
    nombre: "Real Madrid",
    stock: 40,
    precio: 2800,
  },
]

const ItemList = (productos) => {
  return (
    <>
    {productos.map((item) => (<item key= {item.id} item={item} />))}
    </>
  )
}

const Item = ({ item }) => {
  return (
    <div>
      <h1>Arsenal</h1>
      <p></p>
      <h4>2.500</h4>
      <button>ver mas detalle</button>
    </div>
  );
};

export default Item;