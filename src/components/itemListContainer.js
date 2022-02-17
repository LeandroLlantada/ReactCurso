import Item from "./Item";
import ItemList from "./ItemList";

const ItemListContainer = () => {

  const productos = [{ItemList}]
  
  const tarea = new Promise ((resolve,reject) => {
    setTimeout(() => {
      resolve(productos)
    }, 3000);
  });

  tarea.then((result) => {
    console.log(result);
  }).catch(err => {
    console.log(err)
  })

  console.log(tarea);

  
  return <h1>hola</h1>;
  }

  export default ItemListContainer
