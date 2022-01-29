import styles from "../assets/css/global.module.css"
import Contenedor from "../components/Contenedor";
import example from "../../example.json";
import {useState} from "react"

function matolink() {
  const Numerito = useState(0)
  let NumeritoC = Numerito[0]
  let setNumerito = Numerito[1]
  return (
    <div >
      <h1>{NumeritoC}</h1>
      <button className={"btn btn-primary " + styles.div} onClick={() => setNumerito(NumeritoC + 1)}>mas uno</button>
      <button className={styles.div} onClick={() => setNumerito(NumeritoC - 1)}>menos uno</button>
      {example.map((e) => (
        <div key={e.id}>
          <Contenedor
            titulo={e.titulo}
            descripcion={e.descripcion}
            cargo={e.cargo}
            modalidad={e.modalidad}
          />
          <br />
        </div>
      ))}
      <h1 className={styles.div}>caaaa</h1>
    </div>
  );
}

export default matolink;
