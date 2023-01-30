import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Lista({ setTarefas, tarefas }) {
  useEffect(() => {
    axios
      .get(" http://localhost:5555/tarefas")
      .then((respuesta) => setTarefas(respuesta.data))
      .catch();
  }, []);

  return (
    <>
      <h3>Lista de Tarefas:</h3>
      {tarefas.map((tarefa) => (
        <p key={tarefa.id}>
          {tarefa.id}- Tarefa: {tarefa.title}, Subject: {tarefa.subject}{" "}
        </p>
      ))}
    </>
  );
}
