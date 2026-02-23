import React from "react";

export const Content = () => {

  const productos = [
    {
      id: 1,
      nombre: "Auriculares Gamer",
      precio: 150000,
      stock: 12,
      categoria: "Audio",
      imagen: "/img/auriculares.jpg"
    },
    {
      id: 2,
      nombre: "Laptop HP i5",
      precio: 2500000,
      stock: 5,
      categoria: "Computadores",
      imagen: "/img/laptop.jpg"
    },
    {
      id: 3,
      nombre: "Mouse Inalámbrico",
      precio: 80000,
      stock: 20,
      categoria: "Accesorios",
      imagen: "/img/mouse.jpg"
    }
  ];

  return (
    <main className="container-fluid p-4">
      <div className="row w-100 m-0">

        {/* LISTA PRODUCTOS */}
        <div className="col-lg-8">

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h1 className="fw-bold mb-0">
                Productos
              </h1>
            </div>
          </div>

          <div className="row">
            {productos.map((producto) => (
              <div key={producto.id} className="col-md-6 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={producto.imagen}
                    className="card-img-top"
                    alt={producto.nombre}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="mb-1"><strong>Precio:</strong> ${producto.precio.toLocaleString()}</p>
                    <p className="mb-1"><strong>Stock:</strong> {producto.stock}</p>
                    <p className="text-muted">{producto.categoria}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* FORMULARIO */}
        <div className="col-lg-4">
          <div className="card shadow-sm h-100">
            <h1 className=" text-dark p-3">
              Agregar producto
            </h1>

            <div className="card-body">

              <div className="mb-3">
                <label className="form-label">Nombre del producto</label>
                <input type="text" className="form-control" />
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Precio (COP)</label>
                  <input type="number" className="form-control" />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Stock</label>
                  <input type="number" className="form-control" />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Categoría</label>
                <select className="form-select">
                  <option>Selecciona una categoría</option>
                  <option>Audio</option>
                  <option>Computadores</option>
                  <option>Accesorios</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Imagen del producto</label>
                <input type="file" className="form-control" accept="image/*" />
              </div>

              <div className="mb-3">
                <label className="form-label">Descripción</label>
                <textarea className="form-control" rows="3"></textarea>
              </div>

              <div className="d-flex gap-2">
                <button className="btn btn-success w-100">
                  <i className="bi bi-cart-plus"></i> Agregar al catálogo
                </button>
                <button className="btn btn-outline-secondary">
                  Limpiar
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </main>
  );
};