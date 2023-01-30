import axios from "axios";
import React, { useRef } from "react";

export default function Formulario({ setTarefas, tarefas }) {
  const $name = useRef();
  const $subject = useRef();
  const HandleSubmit = (event) => {
    event.preventDefault();
    let title = $name.current.value;
    let subject = $subject.current.value;
    axios
      .post("http://localhost:5555/tarefas", {
        title,
        subject,
      })
      .then((respuesta) => {
        setTarefas([...tarefas, respuesta.data]);
        $name.current.value = "";
        $subject.current.value = "";
      });
  };

  return (
    <>
      <form onSubmit={(event) => HandleSubmit(event)}>
        <label htmlFor="tarefa">Nova Tarefa: </label>
        <br />
        <input type="text" id="tarefa" ref={$name} />
        <br />
        <label htmlFor="subject">Subject: </label>
        <br />
        <textarea
          name=""
          cols="30"
          rows="10"
          id="subject"
          ref={$subject}
        ></textarea>
        <br />
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
}
