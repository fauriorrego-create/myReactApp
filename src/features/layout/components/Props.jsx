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
      />
      <h5>{nombre}</h5>
    </div>
  );
};

const Props = () => {
  return (
    <div className="text-center">
      <h1 className="fw-bold mb-4">Props React</h1>

      <p className="lead mb-5">
        Este componente demuestra el uso de <strong>props</strong> en React.
        Cada Avatar recibe datos desde el componente padre, permitiendo
        reutilizar el mismo componente con diferente información.
      </p>

      <div className="row justify-content-center gap-5">
        <Avatar
          nombre="Megin"
          imagen="/img/descarga.jpg"
        />

        <Avatar
          nombre="petro"
          imagen="/img/petro.jpg"
        />

        <Avatar
          nombre="speed"
          imagen="/img/speed.webp"
        />
      </div>
    </div>
  );
};

export default Props;