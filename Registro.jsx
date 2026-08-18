import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registro() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const crearCuenta = () => {

    // Validar nombre
    if (nombre.trim() === "") {
      setError("El nombre es obligatorio.");
      return;
    }

    // Validar correo
    if (!correo.includes("@") || !correo.includes(".")) {
      setError("Ingresa un correo electrónico válido.");
      return;
    }

    // Validar contraseña
    if (contrasena.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    // Crear usuario
    const usuario = {
      nombre: nombre,
      correo: correo,
      contrasena: contrasena
    };

    // Guardar temporalmente
    localStorage.setItem("usuario", JSON.stringify(usuario));

    // Limpiar error
    setError("");

    // Ir al inicio de sesión
    navigate("/login");
  };

  return (
    <div className="registro">

      <h1>JOBBIT</h1>

      <h2>Crear una cuenta</h2>

      <p>
        Completa tus datos para registrarte.
      </p>

      <div className="formulario">

        <label>Nombre</label>

        <input
          type="text"
          placeholder="Escribe tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label>Correo electrónico</label>

        <input
          type="email"
          placeholder="Escribe tu correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <label>Contraseña</label>

        <input
          type="password"
          placeholder="Crea una contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        <button onClick={crearCuenta}>
          Crear cuenta
        </button>

      </div>

    </div>
  );
}

export default Registro;