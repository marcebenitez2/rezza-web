export const Navbar = () => {
  return (
    <header className="h-20 w-full flex justify-between border-b items-center px-8 fixed top-0">
      <span>Logo tienda</span>
      <nav>
        <ul className="flex">
          <li>Inicio</li>
          <li>Categorías</li>
          <li>Ofertas</li>
          <li>Contacto</li>
        </ul>
      </nav>
      <div>
        <button>Buscar</button>
        <button>Carrito</button>
      </div>
    </header>
  );
};
