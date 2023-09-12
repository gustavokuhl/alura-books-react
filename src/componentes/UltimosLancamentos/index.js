import { livros } from "./dadosUltimosLancamentos";
import { Titulo } from "../Titulo";
import CardRecomenda from "../CardRecomenda";
import styled from "styled-components";
import livro from "../../imagens/livro2.png";

const Container = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
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
      <Titulo cor="#000" tamanhofonte="36px">
        Últimos Lançamentos
      </Titulo>
      <NovosLivrosContainer>
        {livros.map((livro, index) => (
          <img
            key={index}
            src={livro.src}
            alt={`Capa do livro ${livro.nome}`}
          />
        ))}
      </NovosLivrosContainer>
      <CardRecomenda
        titulo="Talvez você se interesse por..."
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação com a plataforma Google"
        img={livro}
      />
    </Container>
  );
}

export default UltimosLancamentos;
