import "./../styles/login.css";
import iconMerca from "../assets/iconmerca.png";


function Login() {
  return (
    <div className="login-container">

      <div className="login-card">

        <div className="login-logo">
          <img src={iconMerca} alt="Merca" />
        </div>

        <h1>MERCA</h1>

        <p>Acceso al Sistema</p>

        <div className="input-group">
          <label>Usuario</label>
          <input
            type="text"
            placeholder="Ingrese su usuario"
          />
        </div>

        <div className="input-group">
          <label>Contraseña</label>
          <input
            type="password"
            placeholder="Ingrese su contraseña"
          />
        </div>

        <button className="login-btn">
          Iniciar Sesión
        </button>

        <div className="login-links">
          ¿Olvidó su contraseña?
        </div>

      </div>

    </div>
  );
}

export default Login;