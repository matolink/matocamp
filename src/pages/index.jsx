import Contenedor from "../components/Contenedor";
import example from "../../example.json";

function matolink() {
  return (
    <div>
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
    </div>
  );
}

export default matolink;
