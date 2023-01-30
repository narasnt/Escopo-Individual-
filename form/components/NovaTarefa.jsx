import { useState } from "react";
import React from "react";

export default function NovaTarefa() {
  const [tarefa, setTarefa] = React.useState(null);
  const HandleChange = (event) => {
    setTarefa(event.target.value);
    console.log(tarefa);
  };

  return (
    <>
      <h1>Nova Tarefa</h1>
      <input type="text" onChange={(event) => HandleChange(event)} />
      <h1>{tarefa}</h1>
    </>
  );
}
