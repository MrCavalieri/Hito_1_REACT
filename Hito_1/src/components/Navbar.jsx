const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        La Tutta pasta
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              🍝 Inicio
            </a>
          </li>
          {token ? (
            <>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  🔓 Perfil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  🔒 Cerrar
                </a>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  🔐 Ingresar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  🔐 Registro
                </a>
              </li>
            </>
          )}
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              🛒 Total: {total.toLocaleString()}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
