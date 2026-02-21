import React from "react";

export const Footer = () => {
  return (
    <footer className="border-top mt-5 py-3 bg-dark">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">

          {/* Izquierda */}
          <div className="text-light small">
            © 2026 · <strong>Carrito de Compras</strong> (Maquetación Bootstrap)
          </div>

          {/* Derecha */}
          <div className="d-flex gap-3 mt-2 mt-md-0">
            <a href="#" className="text-danger text-primary small">
              <i className="bi bi-info-circle-fill me-1"></i>
              Ayuda
            </a>

            <a href="#" className="text-decoration-none text-warning small">
              <i className="bi bi-shield-check me-1"></i>
              Políticas
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};