import "./estilo.css";
import perfil from "../../imagens/perfil.svg";
import sacola from "../../imagens/sacola.svg";

const icones = [
  [perfil, "Ícone de perfil"],
  [sacola, "Sacola"],
];

function IconesHeader() {
  return (
    <ul className="icones">
      {icones.map((icone) => (
        <li className="icone">
          <img src={icone[0]} alt={icone[1]}></img>
        </li>
      ))}
    </ul>
  );
}

export default IconesHeader;
