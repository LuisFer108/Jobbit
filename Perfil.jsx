import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Perfil() {
  const navigate = useNavigate();

  const [telefono, setTelefono] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [titulo, setTitulo] = useState("");
  const [experiencia, setExperiencia] = useState("");
  const [habilidades, setHabilidades] = useState("");
  const [foto, setFoto] = useState("");
  const [cv, setCv] = useState("");

  const guardarPerfil = () => {
    if (
      telefono === "" ||
      ciudad === "" ||
      titulo === "" ||
      experiencia === "" ||
      habilidades === ""
    ) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const perfil = {
      telefono,
      ciudad,
      titulo,
      experiencia,
      habilidades,
      foto,
      cv,
    };

    // Obtener el usuario que está actualmente conectado
    const usuarioActualGuardado = localStorage.getItem(
      "jobbit_usuario_actual"
    );

    if (!usuarioActualGuardado) {
      alert("No hay ningún usuario conectado.");
      navigate("/login");
      return;
    }

    const usuarioActual = JSON.parse(usuarioActualGuardado);

    // Obtener todos los usuarios registrados
    const usuariosGuardados = localStorage.getItem(
      "jobbit_usuarios"
    );

    if (!usuariosGuardados) {
      alert("No se encontraron usuarios registrados.");
      navigate("/login");
      return;
    }

    const usuarios = JSON.parse(usuariosGuardados);

    // Buscar al usuario que está conectado
    const indiceUsuario = usuarios.findIndex(
      (usuario) => usuario.correo === usuarioActual.correo
    );

    if (indiceUsuario === -1) {
      alert("No se encontró la cuenta del usuario.");
      navigate("/login");
      return;
    }

    // Guardar el perfil dentro de ese usuario
    usuarios[indiceUsuario].perfil = perfil;

    // Actualizar la lista de usuarios
    localStorage.setItem(
      "jobbit_usuarios",
      JSON.stringify(usuarios)
    );

    // Actualizar también el usuario actualmente conectado
    usuarioActual.perfil = perfil;

    localStorage.setItem(
      "jobbit_usuario_actual",
      JSON.stringify(usuarioActual)
    );

    alert("Perfil guardado correctamente.");

    navigate("/candidato");
  };

  const seleccionarFoto = (e) => {
    const archivo = e.target.files[0];

    if (archivo) {
      setFoto(archivo.name);
    }
  };

  const seleccionarCV = (e) => {
    const archivo = e.target.files[0];

    if (archivo) {
      setCv(archivo.name);
    }
  };

  return (
    <div className="perfil">

      <header className="perfil-header">
        <h1>JOBBIT</h1>
        <h2>Mi perfil</h2>
      </header>

      <div className="perfil-contenido">

        {/* SECCIÓN DE FOTO */}
        <section className="perfil-foto">

          <h3>TU FOTO</h3>

          <div className="foto-placeholder">
            👤
          </div>

          <label className="subir-foto">
            Sube una foto aquí

            <input
              type="file"
              accept="image/*"
              onChange={seleccionarFoto}
            />
          </label>

          {foto && <p>Foto seleccionada: {foto}</p>}

        </section>

        {/* SECCIÓN PERSONAL */}
        <section className="perfil-personal">

          <h3>Sección personal</h3>

          <label>Teléfono / celular:</label>

          <input
            type="tel"
            placeholder="Escribe tu teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />

          <label>
            ¿En qué ciudad y departamento te encuentras?
          </label>

          <input
            type="text"
            placeholder="Ej: Medellín, Antioquia"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
          />

          <label>Título profesional:</label>

          <input
            type="text"
            placeholder="Ej: Ingeniero de Sistemas"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />

          <label className="cv-boton">

            <strong>ADJUNTAR CV</strong>

            <span>Sube tu hoja de vida aquí (PDF)</span>

            <input
              type="file"
              accept=".pdf"
              onChange={seleccionarCV}
            />

          </label>

          {cv && <p>CV seleccionado: {cv}</p>}

        </section>

        {/* SECCIÓN LABORAL */}
        <section className="perfil-laboral">

          <h3>Sección Laboral / Académica</h3>

          <label>
            ¿Cuál es tu experiencia laboral?
          </label>

          <textarea
            placeholder="Cuéntanos todos los detalles"
            value={experiencia}
            onChange={(e) => setExperiencia(e.target.value)}
          />

          <label>
            ¿Cuáles son tus habilidades?
          </label>

          <textarea
            placeholder="Menciona hasta la más mínima"
            value={habilidades}
            onChange={(e) => setHabilidades(e.target.value)}
          />

        </section>

      </div>

      <div className="perfil-botones">

        <button
          className="cancelar"
          onClick={() => navigate("/candidato")}
        >
          CANCELAR
        </button>

        <button
          className="guardar"
          onClick={guardarPerfil}
        >
          GUARDAR PERFIL
        </button>

      </div>

    </div>
  );
}

export default Perfil;