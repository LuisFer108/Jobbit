import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Registro() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const navigate = useNavigate();

  const crearCuenta = () => {
    if (nombre === "" || correo === "" || contrasena === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Obtener las cuentas que ya existen
    const usuariosGuardados = localStorage.getItem("jobbit_usuarios");

    const usuarios = usuariosGuardados
      ? JSON.parse(usuariosGuardados)
      : [];

    // Verificar si el correo ya está registrado
    const correoExiste = usuarios.some(
      (usuario) =>
        usuario.correo.toLowerCase().trim() ===
        correo.toLowerCase().trim()
    );

    if (correoExiste) {
      alert("Ya existe una cuenta registrada con ese correo.");
      return;
    }

    // Crear el nuevo usuario
    const nuevoUsuario = {
      nombre: nombre,
      correo: correo.trim(),
      contrasena: contrasena,
      tipo: "candidato",
      perfil: null,
    };

    // Agregar el usuario a la lista
    usuarios.push(nuevoUsuario);

    // Guardar todos los usuarios
    localStorage.setItem(
      "jobbit_usuarios",
      JSON.stringify(usuarios)
    );

    alert("Cuenta creada correctamente.");

    navigate("/login");
  };

  return (
    <div className="registro">
      <h1>JOBBIT</h1>

      <h2>Crear una cuenta</h2>

      <p>Completa tus datos para registrarte.</p>

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

        <button onClick={crearCuenta}>
          Crear cuenta
        </button>

      </div>

      <p>
        ¿Ya tienes una cuenta?{" "}
        <Link to="/login">Inicia sesión</Link>
      </p>
    </div>
  );
}

export default Registro;