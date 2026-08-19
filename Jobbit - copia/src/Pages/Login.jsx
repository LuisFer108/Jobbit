import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const navigate = useNavigate();

  const iniciarSesion = () => {
    if (correo === "" || contrasena === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const usuariosGuardados = localStorage.getItem("jobbit_usuarios");

    if (!usuariosGuardados) {
      alert("No existe una cuenta registrada.");
      return;
    }

    const usuarios = JSON.parse(usuariosGuardados);

    // Buscar el usuario correspondiente
    const usuario = usuarios.find(
      (usuario) =>
        usuario.correo === correo &&
        usuario.contrasena === contrasena
    );

    if (!usuario) {
      alert("El correo o la contraseña son incorrectos.");
      return;
    }

    // Guardar quién inició sesión
    localStorage.setItem(
      "jobbit_usuario_actual",
      JSON.stringify(usuario)
    );

    alert("Inicio de sesión exitoso.");

    if (usuario.tipo === "candidato") {
      navigate("/candidato");
    }
  };

  return (
    <div className="login">
      <h1>JOBBIT</h1>

      <h2>¡Bienvenid@ de nuevo!</h2>

      <p>Qué grato contar con tu presencia por aquí</p>

      <p>Ingresa tus datos para continuar:</p>

      <div className="formulario">
        <label>Correo electrónico</label>

        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <label>Contraseña</label>

        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />

        <button onClick={iniciarSesion}>INGRESA</button>
      </div>

      <p>
        ¿No tienes una cuenta?{" "}
        <Link to="/registro">Regístrate</Link>
      </p>
    </div>
  );
}

export default Login;