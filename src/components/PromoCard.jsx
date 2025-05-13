import React, { useState } from "react";

const PromoCard = (props) => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const precoComDesconto = props.preco - (props.preco * props.desconto) / 100;

  return (
    <>
      <div id="PromoCard" className="promoCard card border-0 overflow-hidden">
        <img
          className="card-img-top object-fit-cover"
          src={props.imagem}
          height={300}
          alt="Titulo do jogo"
          style={{ cursor: "pointer" }}
          onClick={() => setMostrarModal(true)}
        />
        <div className="card-body d-flex flex-column gap-2">
          <h5
            data-bs-toggle="tooltip"
            title={props.titulo}
            className="card-title text-uppercase text-truncate mw-100 h-100 fw-bold text-light text-nowrap"
          >
            {props.titulo}
          </h5>
          <div className="m-0 row h-100 align-items-center justify-content-center">
            <span className="desconto col-4 h-100 fw-bold h5 m-0 d-flex align-items-center">
              -{props.desconto}%
            </span>
            <div className="col h-100 card-text bg-dark">
              <p className="m-0 p-0 text-end text-secondary text-decoration-line-through small">
                <small>{props.precoFormatado}</small>
              </p>
              <p className="corValor m-0 p-0 fs-4 text-end fw-bolder">
                {props.formatarMoeda(precoComDesconto)}
              </p>
            </div>
          </div>
          <button
            id="addCarrinho"
            className="btn btn-success desconto text-light w-100 border-0"
            onClick={props.onAddCarrinho}
          >
            <i className="bi bi-cart-plus me-2"></i>
            Adicionar ao carrinho
          </button>
        </div>
      </div>

      {/* Modal */}
      {mostrarModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            role="document"
          >
            <div className="modal-content bg-dark text-light">
              <div className="modal-header">
                <h5 className="modal-title">{props.titulo}</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setMostrarModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src={props.imagem}
                  alt={props.titulo}
                  className="img-fluid mb-3"
                />
                <p><strong>Descrição:</strong> {props.descricao || "Sem descrição disponível."}</p>
                <p><strong>Preço original:</strong> {props.precoFormatado}</p>
                <p><strong>Desconto:</strong> -{props.desconto}%</p>
                <p><strong>Preço com desconto:</strong> {props.formatarMoeda(precoComDesconto)}</p>
              </div>
              <div className="modal-footer">
                
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PromoCard;
