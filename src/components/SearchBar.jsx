const SearchBar = ({ setNombreBusqueda }) => {
  return (
    <nav>
      <a className="nav-a" href="/">
        <img
          src="https://carulla.vtexassets.com/assets/vtex.file-manager-graphql/images/561fe96d-932f-40cd-8e34-e442cdf1e0d6___f3556a6d4cab8e69740ad543ecb40c0d.png"
          alt="logo de Carulla"
          className="carulla-logo"
        />
      </a>
      <a className="nav-a" href="#">
        <img
          src="https://www.ternascodearagon.es/wp-content/uploads/2021/11/toppng.com-white-location-icon-png-location-logo-png-white-696x872-1.png"
          alt="Location"
          className="carulla-logo"
        />
      </a>
      <p className="nav-text">¿Cómo quieres recibir tu pedido?</p>
      <input className="nav-input" type="text" placeholder="¿Qué producto buscas?" onChange={(e) => setNombreBusqueda(e.target.value)} />
    </nav>
  );
};

export default SearchBar;
