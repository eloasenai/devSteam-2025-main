import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

const Pagamento = () => {
  const [selected, setSelected] = useState(null);
  const [saved, setSaved] = useState(false);
  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "",
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleCardSelection = (card) => {
    setSelected(card);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (e) => {
    setCardData((prev) => ({ ...prev, focus: e.target.name }));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        marginLeft: "250px",
        height: "100vh",
        backgroundColor: "transparent",
      }}
    >
      <div>
        <p
          style={{
            marginBottom: "10px",
            fontSize: "30px",
            fontWeight: "bold",
            marginLeft: "100px",
          }}
        >
          CARTÃO
        </p>
        <button
          onClick={() => setSelected("option1")}
          style={{
            padding: "15px 50px",
            marginRight: "10px",
            backgroundColor: selected === "option1" ? "#BE3144" : "#ccc",
            color: selected === "option1" ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          CRÉDITO
        </button>
        <button
          onClick={() => setSelected("option2")}
          style={{
            padding: "15px 50px",
            marginRight: "10px",
            backgroundColor: selected === "option2" ? "#BE3144" : "#ccc",
            color: selected === "option2" ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          DÉBITO
        </button>

        <input
          type="text"
          name="number"
          placeholder="NÚMERO DO CARTÃO"
          maxLength="16"
          value={cardData.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "flex-start",
            padding: "15px",
            width: "340px",
            backgroundColor: "#ccc",
            color: "#000",
            textAlign: "center",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />

        <input
          type="text"
          name="name"
          placeholder="NOME DO TITULAR"
          value={cardData.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "flex-start",
            padding: "15px",
            width: "340px",
            backgroundColor: "#ccc",
            color: "#000",
            textAlign: "center",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />

        <input
          type="text"
          name="expiry"
          placeholder="VALIDADE (MM/AA)"
          maxLength="5"
          value={cardData.expiry}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "flex-start",
            padding: "15px",
            width: "340px",
            backgroundColor: "#ccc",
            color: "#000",
            textAlign: "center",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />

        <input
          type="text"
          name="cvc"
          placeholder="CVC"
          maxLength="3"
          value={cardData.cvc}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "flex-start",
            padding: "15px",
            width: "340px",
            backgroundColor: "#ccc",
            color: "#000",
            textAlign: "center",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />

        <button
          onClick={handleSave}
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "15px",
            width: "340px",
            backgroundColor: "#BE3144",
            color: "#ffffff",
            textAlign: "center",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          SALVAR INFORMAÇÕES
        </button>
        {saved && (
          <p
            style={{
              marginTop: "10px",
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Informações salvas com sucesso!
          </p>
        )}
      </div>
      <div
        style={{
          position: "absolute",
          top: "10%",
          bottom: "5%",
          left: "50%",
          width: "1px",
          backgroundColor: "#ccc",
          transform: "translateX(-50%)",
        }}
      ></div>

      <Cards
        className="h-150 w-150 left-60"
        number={cardData.number}
        name={cardData.name}
        expiry={cardData.expiry}
        cvc={cardData.cvc}
        focused={cardData.focus}
      />
    </div>
  );
};

export default Pagamento;
