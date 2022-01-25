import Contenedor from "../components/Contenedor";
import example from "../../example.json"

function matolink() {
  return (
    <div>
      {example.map( e =>
      <div> 
        <Contenedor 
          titulo={e.titulo} 
          descripcion= {e.descripcion} 
          cargo={e.cargo} 
          modalidad={e.modalidad}
        /> 
        <br /> 
      </div> 
  )}
    </div>
  );
}

export default matolink;
