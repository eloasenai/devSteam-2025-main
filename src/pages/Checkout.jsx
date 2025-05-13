import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { GlobalContext } from "../main.jsx";

const Checkout = () => {
  const [carrinho, setCarrinho] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [cupom, setCupom] = useState("");
  const [cupomAplicado, setCupomAplicado] = useState(false);
  const [cupomError, setCupomError] = useState("");
  const navigate = useNavigate();
  const { formatarMoeda } = useContext(GlobalContext);

  const subtotal = carrinho.reduce(
    (acc, item) =>
      acc + (item.preco - (item.preco * item.desconto) / 100) * item.quantidade,
    0
  );

  const descontoCupom = cupomAplicado ? subtotal * 0.1 : 0;
  const total = subtotal - descontoCupom;

  useEffect(() => {
    const itensCarrinho = localStorage.getItem("devcarrinho");
    itensCarrinho ? setCarrinho(JSON.parse(itensCarrinho)) : navigate("/");
  }, [navigate]);

  const handleConfirmar = () => {
    alert("Compra confirmada! Obrigado 😊");

    // Recupera jogos comprados anteriores
    const jogosComprados = JSON.parse(localStorage.getItem("jogosComprados")) || [];

    // Adiciona os novos jogos
    const novosJogos = [...jogosComprados, ...carrinho];

    // Salva no localStorage
    localStorage.setItem("jogosComprados", JSON.stringify(novosJogos));

    // Limpa o carrinho
    localStorage.removeItem("devcarrinho");

    navigate("/");
  };

  const handleUpdateQuantidade = (item, novaQuantidade) => {
    const novoCarrinho = carrinho.map((produto) =>
      produto.id === item.id
        ? { ...produto, quantidade: novaQuantidade > 0 ? novaQuantidade : 1 }
        : produto
    );
    setCarrinho(novoCarrinho);
    localStorage.setItem("devcarrinho", JSON.stringify(novoCarrinho));
  };

  const handleRemoverItem = (item) => {
    const novoCarrinho = carrinho.filter((produto) => produto.id !== item.id);
    setCarrinho(novoCarrinho);
    localStorage.setItem("devcarrinho", JSON.stringify(novoCarrinho));
    if (novoCarrinho.length === 0) navigate("/");
  };

  const aplicarCupom = () => {
    if (cupom.trim().toLowerCase() === "devpedreiro") {
      setCupomAplicado(true);
      setCupomError("");
    } else {
      setCupomAplicado(false);
      setCupomError("Cupom inválido");
    }
  };

  const removerCupom = () => {
    setCupom("");
    setCupomAplicado(false);
    setCupomError("");
  };

  return (
    <div className="container py-4 text-light align-dropup-center">
      <div className="row">
        {/* COLUNA ESQUERDA */}
        <div className="col-lg-8">
          <div className="card-header border-bottom-0 py-3 mb-4" style={{ background: "#1F2B4E", borderRadius: "10px", width: "151%" }}>
            <div className="card-header border-bottom-0 py-3">
              <h4 className="mb-0 fw-bolder" style={{ color: "#09122C", fontFamily: "monospace", padding: "18px" }}>Meu Carrinho</h4>
            </div>
            <div className="card-body p-4">
              {carrinho.length === 0 ? (
                <div className="text-center py-5">
                  <i className="bi bi-cart-x fs-1 text-muted"></i>
                  <p className="mt-3 mb-0 text-light" style={{ fontFamily: "monospace" }}>Seu carrinho está vazio.</p>
                  <button
                    id="addCarrinho"
                    className="btn btn-success desconto text-light border-0 px-3 py-2 text-light mt-3"
                    style={{ fontFamily: "monospace" }}
                    onClick={() => navigate("/")}>
                    Continuar Comprando
                  </button>
                </div>
              ) : (
                <>
                  {carrinho.map((item, index) => (
                    <div key={item.id} className="row mb-4 position-relative">
                      <div className="col-md-2 col-4">
                        <img
                          src={item.imagem}
                          alt={item.titulo}
                          className="img-fluid rounded-3 object-fit-cover"
                          style={{ height: "100px", width: "100%" }}
                        />
                      </div>
                      <div className="col-md-6 col-8">
                        <h5 className="fw-bold mb-1" style={{ color: "white" }}>
                          {item.titulo}
                        </h5>
                        <small className="text-muted" style={{ fontFamily: "monospace", color: "#ffff" }}>ID: #{item.id}</small>
                        <div className="d-flex align-items-center mt-3">
                          <button
                            onClick={() => handleRemoverItem(item)}
                            className="btn btn-sm btn-outline-danger border-0"
                          >
                            <i className="bi bi-trash me-1 text-light"></i> Remover
                          </button>
                        </div>
                      </div>
                      <div className="col-md-4 col-12 mt-3 mt-md-0">
                        <div className="row align-items-center">
                          <div className="col-4 col-md-5">
                            <div className="border border-dark d-flex align-items-center rounded-4 gap-2" style={{ background: "#09122C" }}>
                              <button
                                className="btn border-0"
                                disabled={item.quantidade === 1}
                                onClick={() => handleUpdateQuantidade(item, item.quantidade - 1)}
                                style={{ color: "white" }}
                              >-</button>
                              <span style={{ color: "white" }}>{item.quantidade}</span>
                              <button
                                className="btn border-0"
                                onClick={() => handleUpdateQuantidade(item, item.quantidade + 1)}
                                style={{ color: "white" }}
                              >+</button>
                            </div>
                          </div>
                          <div className="col-6 text-end">
                            <div className="d-flex flex-column">
                              <small className="text-decoration-line-through text-muted">
                                {formatarMoeda(item.preco)}
                              </small>
                              <span className="fw-bold text-danger fs-5">
                                {formatarMoeda(item.preco - (item.preco * item.desconto) / 100)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {index < carrinho.length - 1 && <hr className="my-3" />}
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA */}
        <div className="col-lg-4 w-100">
          <div className="card border-0 shadow-sm rounded-4" style={{ background: "#1F2B4E" }}>
            <div className="card-header border-bottom-0 py-3">
              <h4 className="mb-0 fw-bolder" style={{ fontFamily: "monospace", color: "#09122C" }}>Resumo do Pedido</h4>
            </div>
            <div className="checkout-container">
              <div className="card-body p-4">

                {/* CUPOM */}
                <div className="mb-3">
                  <label htmlFor="cupom" className="form-label mb-2 text-light" style={{ fontFamily: "monospace" }}>
                    cupom de desconto
                  </label>
                  <div className="input-group text-danger">
                    <input
                      type="text"
                      className={`form-control ${cupomError ? "is-invalid" : ""}`}
                      id="cupom"
                      placeholder="Digite seu cupom"
                      value={cupom}
                      onKeyDown={(e) => e.key === "Enter" && aplicarCupom()}
                      onChange={(e) => setCupom(e.target.value)}
                      disabled={cupomAplicado}
                      style={{ backgroundColor: "#fff" }}
                    />
                    {!cupomAplicado ? (
                      <button className="btn btn-success desconto text-light border-0" type="button" onClick={aplicarCupom} style={{ fontFamily: "monospace" }}>
                        APLICAR
                      </button>
                    ) : (
                      <button className="btn btn-outline-danger" type="button" onClick={removerCupom}>
                        <i className="bi bi-x"></i>
                      </button>
                    )}
                  </div>
                  {cupomError && <div className="text-danger small mt-1">{cupomError}</div>}
                </div>

                <hr className="my-3" />

                <div className="d-flex justify-content-between mb-2 text-light" style={{ fontFamily: "monospace" }}>
                  <span>Subtotal ({carrinho.length} {carrinho.length === 1 ? "item" : "itens"})</span>
                  <span>{formatarMoeda(subtotal)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2 text-light" style={{ fontFamily: "monospace" }}>
                  <span>Frete</span>
                  <span className="text-success text-light">Grátis</span>
                </div>

                {cupomAplicado && (
                  <div className="d-flex justify-content-between mb-2 mt-2">
                    <span className="text-success text-light" style={{ fontFamily: "monospace" }}>Desconto (10%)</span>
                    <span className="text-success">-{formatarMoeda(descontoCupom)}</span>
                  </div>
                )}

                <hr className="my-3" />

                <div className="d-flex justify-content-between mb-4">
                  <span className="fw-bold text-light" style={{ fontFamily: "monospace" }}>Total</span>
                  <span className="fw-bold fs-4">{formatarMoeda(total)}</span>
                </div>

                <button
                  id="addCarrinho"
                  className="btn btn-success desconto text-light border-0 text-light w-100 py-3 fw-bold"
                  onClick={handleConfirmar}
                  disabled={carrinho.length === 0}
                  style={{ fontFamily: "monospace" }}
                >
                  FINALIZAR COMPRA
                </button>

                <button
                  className="btn btn-outline-secondary w-100 mt-2 text-light"
                  style={{
                    fontFamily: "monospace",
                    background: isHovered && "#fff",
                    borderColor: "#fff",
                    color: !isHovered && "#fff",
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={() => navigate("/")}
                >
                  CONTINUAR COMPRANDO
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
