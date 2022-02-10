import React, { useState } from "react";

const PrimerC = ({nombre}) => {
    const [contador, setContador] = useState(1)

    function onAdd() {
        setContador(contador+1)
    }

    function initial() {
        setContador(1)
    }

    return <>
      <h1>{contador}</h1>
      <button onClick={() => onAdd()}></button>;
      <button onClick={() => setContador(contador-1)}></button>;
      <button onClick={() => initial()}></button>
    </>
}

export default PrimerC