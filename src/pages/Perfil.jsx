import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Perfil = () => {
  const [nome, setNome] = useState("");
  const [jogosComprados, setJogosComprados] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("devlogin"));
    if (userData && userData.nome) {
      setNome(userData.nome);
    } else {
      navigate("/");
    }

    const jogosSalvos = JSON.parse(localStorage.getItem("jogosComprados")) || [];
    const jogosUnicos = jogosSalvos.filter(
      (jogo, index, self) => index === self.findIndex(j => j.id === jogo.id)
    );
    setJogosComprados(jogosUnicos);
  }, [navigate]);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to right, rgba(9, 18, 44, 0.5), rgba(9, 18, 44, 0.5)), url(src/img/mario.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "180px",
          width: "1500px",
          height: "547px",
          backgroundColor: "#09122C",
          borderRadius: "4px",
          position: "relative",
        }}
      >
        <i
          className="bi bi-person-circle"
          style={{
            fontSize: "125px",
            color: "#ffffff",
            margin: "-170px",
            marginRight: "1210px",
          }}
        ></i>

        <h1 style={{ marginRight: "1100px", fontFamily: "monospace", fontSize: "45px", color: "#ffffff" }}>
          NOME
        </h1>
        <h2 style={{ color: "#ffffff", marginTop: "20px", marginLeft: "-1130px" }}>{nome}</h2>
        <h2 style={{ margin: "40px", marginRight: "1110px" }}>JOGOS COMPRADOS</h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            padding: "20px",
          }}
        >
          {jogosComprados.length === 0 ? (
            <p style={{ color: "#ffffff" }}>Você ainda não comprou nenhum jogo.</p>
          ) : (
            jogosComprados.map((jogo, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#1F2B4E",
                  padding: "20px",
                  borderRadius: "10px",
                  width: "200px",
                  textAlign: "center",
                  color: "#ffffff",
                }}
              >
                <img
                  src={jogo.imagem}
                  alt={jogo.titulo}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                    marginBottom: "10px",
                  }}
                />
                <h5>{jogo.titulo}</h5>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Perfil;
