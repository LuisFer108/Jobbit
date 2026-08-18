import { useNavigate } from "react-router-dom";

function Candidato() {
  const navigate = useNavigate();

  const usuarioActual = JSON.parse(
    localStorage.getItem("jobbit_usuario_actual")
  );

  const cerrarSesion = () => {
    localStorage.removeItem("jobbit_usuario_actual");
    navigate("/");
  };

  return (
    <div className="candidato">

      <h1>JOBBIT</h1>

      <h2>Portal de candidato</h2>

      <p>
        Bienvenido, {usuarioActual?.nombre}.
      </p>

      {!usuarioActual?.perfil ? (
        <div>
          <h3>Completa tu perfil laboral</h3>

          <p>
            Para poder encontrar oportunidades que se adapten
            a ti, primero debes completar tu perfil.
          </p>

          <button onClick={() => navigate("/perfil")}>
            Completar perfil
          </button>
        </div>
      ) : (
        <div>
          <h3>¡Tu perfil está completo! 🎉</h3>

          <button>
            Ver vacantes
          </button>

          <button>
            Mis postulaciones
          </button>
        </div>
      )}

      <button onClick={cerrarSesion}>
        Cerrar sesión
      </button>

    </div>
  );
}

export default Candidato;