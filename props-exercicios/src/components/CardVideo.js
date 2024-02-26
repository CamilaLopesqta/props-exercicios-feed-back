import InfosUsuario from "./InfosUsuario";

export default function CardVideo(props) {
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }

  return (
    <div className="box-pagina-principal" onClick={reproduzVideo}>
      <img src={props.imagemCard} alt="imagem" />
      <h4>{props.titulo}</h4>
      <InfosUsuario
        imagemUsuario={props.imagemUsuario}
        nomeUsuario={props.nomeUsuario}
      />
    </div>
  );
}
