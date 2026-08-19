import { Link } from "react-router-dom";

function App() {
  return (
    <div className="inicio">

      <h1>JOBBIT</h1>

      <h2>Encuentra tu próxima oportunidad</h2>

      <p>
        Encuentra empleos de forma sencilla y descubre oportunidades
        que se adapten a tu perfil.
      </p>

      <div className="botones">

        <Link to="/login" className="boton">
          Iniciar sesión
        </Link>

        <Link to="/registro" className="boton">
          Registrarse
        </Link>

      </div>

    </div>
  );
}

export default App;