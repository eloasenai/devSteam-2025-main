import React from "react";
import { useParams, useNavigate } from "react-router";

const JogoDetalhe = () => {
    const { id } = useParams();
    const Navigate = useNavigate();
  
    // Buscar dados do jogo com base no id
    const jogo = {
      id,
      titulo: "Nome do Jogo",
      descricao: "Descrição completa do jogo...",
    };
  
    return (
      <div className="container text-light p-4">
        <h1>{jogo.titulo}</h1>
        <p>{jogo.descricao}</p>
      </div>
    );
  };
  
  export default JogoDetalhe;