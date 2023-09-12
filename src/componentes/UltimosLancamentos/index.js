import { livros } from "./dadosUltimosLancamentos";
import styled from "styled-components";

const Container = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const Titulo = styled.h2`
  width: 100%;
  padding: 30px 0;
  background-color: #fff;
  color: #eb9b00;
  font-size: 36px;
  text-align: center;
  margin: 0;
`;

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

function UltimosLancamentos() {
  return (
    <Container>
      <Titulo>Últimos Lançamentos</Titulo>;
      <NovosLivrosContainer>
        {livros.map((livro) => (
          <img src={livro.src} alt={`Capa do livro ${livro.nome}`} />
        ))}
      </NovosLivrosContainer>
    </Container>
  );
}

export default UltimosLancamentos;
