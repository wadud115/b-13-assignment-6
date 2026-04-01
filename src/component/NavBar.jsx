const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="flex items-center   gap-1 font-bold text-4xl text-purple-600">
         DigiTools
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu font-semibold text-gray-500 menu-horizontal gap-10 px-1 text-lg">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-5">
        <img src="" alt="" />
        <a href="">Login</a>
        <a className="btn bg-purple-600 rounded-full text-white">Get Started</a>
      </div>
    </div>
  );
};

export default NavBar;