import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Formulario from "./components/Formulario";
import NovaTarefa from "./components/NovaTarefa";
import Lista from "./components/Lista";

function App() {
  const [tarefas, setTarefas] = useState([]);
  return (
    <>
      <Formulario setTarefas={setTarefas} tarefas={tarefas} />
      <br />
      <hr />
      <Lista setTarefas={setTarefas} tarefas={tarefas} />
    </>
  );
}

export default App;
