import React, { useContext } from "react";
import { ClientContext } from "./ClientContext";
import { useNavigate } from "react-router-dom";

export const ClientForm = () => {
  const { clients, saveClient } = useContext(ClientContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = clients.length + 1;
    const nombres = e.target.nombres.value.toUpperCase();
    const apellidos = e.target.apellidos.value.toUpperCase();
    const documento = e.target.documento.value;
    const tipoDocumento = e.target.tipoDocumento.value;
    const grado = e.target.grado.value;
    const fechaNacimiento = e.target.fechaNacimiento.value;
    const estadoCivil = e.target.estadoCivil.value;

    console.log(
      nombres,
      apellidos,
      documento,
      tipoDocumento,
      grado,
      fechaNacimiento,
      estadoCivil,
    );
    const client = {
      id,
      nombres,
      apellidos,
      documento,
      tipoDocumento,
      grado,
      fechaNacimiento,
      estadoCivil,
    };
    saveClient(client);

    navigate("/cliente");
  };

  return (
    <section className="container">
      <h1>Cliente</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-1 row">
            <div className="mb-1 col-md-6">
              <label htmlFor="nombres" className="form-label">
                1. Nombres
              </label>
              <input
                type="text"
                className="form-control"
                id="nombres"
                aria-describedby="nameHelp"
              />
            </div>
            <div className="mb-1 col-md-6">
              <label htmlFor="apellidos" className="form-label">
                2. Apellidos
              </label>
              <input
                type="text"
                className="form-control"
                id="apellidos"
                aria-describedby="apellidoHelp"
              />
            </div>
          </div>

          <div className="mb-1 row">
            <div className="mb-1 col-md-6">
              <label className="form-label" htmlFor="tipoDocumento">
                3. Tipo de Documento
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                id="tipoDocumento"
              >
                <option value="">Seleccione</option>
                <option value="CC">Cedula de ciudadania</option>
                <option value="CE">Cedula de extranjeria</option>
                <option value="TI">Tarjeta de identidad</option>
                <option value="NIT">NIT</option>
              </select>
            </div>

            <div className="mb-1 col-md-6">
              <label htmlFor="documento" className="form-label">
                4. Documento
              </label>
              <input
                type="text"
                className="form-control"
                id="documento"
                aria-describedby="documentoHelp"
              />
            </div>
          </div>

          <div className="mb-1 row">


        <div className="mb-1 col-md-6">
              <label className="form-label" htmlFor="grado">
                5. Grado de estudio
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                id="grado"
              >
                <option value="">Seleccione</option>
                <option value="bachiller">Bachiller</option>
                <option value="universitario">Universitario</option>
                <option value="tecnico">Tecnico</option>  

              </select>
            </div>

            <div className="mb-1 col-md-6">
              <label htmlFor="fechaNacimiento" className="form-label">
                6. Fecha de Nacimiento
              </label>
              <input
                type="date"
                className="form-control"
                id="fechaNacimiento"
                aria-describedby="fechaNacimientoHelp"
              />
            </div>
          </div>

          <div className="mb-1 row">
            <div className="mb-1 col-md-6">
              <label className="form-label">7. Estado civil</label>
              <select
                className="form-select"
                aria-label="Default select example"
                id="estadoCivil"
              >
                <option value="">Estado civil</option>
                <option value="Soltero">Soltero</option>
                <option value="Casado">Casado</option>
                <option value="Viudo">Viudo</option>
                <option value="Divorciado">Divorciado</option>
                <option value="Union libre">Union libre</option>
              </select>
            </div>
          </div>

          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
