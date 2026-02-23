import React from "react";

const Avatar = ({ nombre, imagen }) => {
  return (
    <div className="text-center">
      <img
        src={imagen}
        alt={nombre}
        className="rounded-circle mb-3"
        width="180"
        height="180"
        style={{ objectFit: "cover" }}
        onError={(e) => {
          e.target.src =
            "https://via.placeholder.com/180?text=Avatar";
        }}
      />
      <h5>{nombre}</h5>
    </div>
  );
};

const Props = () => {
  return (
    <div className="container py-5 text-center">
      <h1 className="fw-bold mb-4">Props React</h1>

      <p className="lead mb-5">
        Este componente demuestra el uso de <strong>props</strong> en React.
        Cada Avatar recibe datos desde el componente padre, permitiendo
        reutilizar el mismo componente con diferente información.
      </p>

      <div className="row justify-content-center gap-5">

        <Avatar
          nombre="Megin"
          imagen="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=500&auto=format&fit=crop"
        />

        <Avatar
          nombre="Petro"
          imagen="https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?q=80&w=500&auto=format&fit=crop"
        />

        <Avatar
          nombre="Speed"
          imagen="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop"
        />

      </div>
    </div>
  );
};

export default Props;