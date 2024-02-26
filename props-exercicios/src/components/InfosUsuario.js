export default function InfosUsuario(props) {
  return (
    <div className="info-usuarios">
      <img src={props.imagemUsuario} />
      <p>{props.nomeUsuario}</p>
    </div>
  );
}
