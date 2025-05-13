import { useParams, useNavigate } from "react-router";

const JogoDetalhe = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Buscar dados do jogo com base no `id`
  const jogo = {
    id,
    titulo: "Nome do Jogo",
    descricao: "Descrição completa do jogo...",
  };

  return (
    <div className="container text-light p-4">
      <h1>{jogo.titulo}</h1>
      <p>{jogo.descricao}</p>
      <button className="btn btn-secondary mt-3" onClick={() => navigate("/")}>
        Voltar
      </button>
    </div>
  );
};

export default JogoDetalhe;
