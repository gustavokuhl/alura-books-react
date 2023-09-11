import perfil from "../../imagens/perfil.svg";
import sacola from "../../imagens/sacola.svg";
import styled from "styled-components";

const Icone = styled.li`
  margin-right: 20px;
  width: 25px;
`;

const Icones = styled.ul`
  display: flex;
  align-items: center;
`;

const icones = [
  [perfil, "Ícone de perfil"],
  [sacola, "Sacola"],
];

function IconesHeader() {
  return (
    <Icones>
      {icones.map((icone) => (
        <Icone>
          <img src={icone[0]} alt={icone[1]}></img>
        </Icone>
      ))}
    </Icones>
  );
}

export default IconesHeader;
