
const Contenedor = (props) => {
  return <div>
    <h3>{props.titulo}</h3>
    <div>{props.descripcion}</div>
    <div>{props.cargo}</div>
    <div>{props.modalidad}</div>
  </div>;
};

export default Contenedor;
