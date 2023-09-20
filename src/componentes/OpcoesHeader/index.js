import styled from "styled-components";
import { Link } from "react-router-dom";

const Opcoes = styled.ul`
  display: flex;
`;

const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5;
  cursor: pointer;
  min-width: 120px;
`;

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

function OpcoesHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((texto, index) => (
        <Opcao key={index}>
          <Link to={`/${texto.toLowerCase()}`}>
            <p>{texto}</p>
          </Link>
        </Opcao>
      ))}
    </Opcoes>
  );
}

export default OpcoesHeader;
