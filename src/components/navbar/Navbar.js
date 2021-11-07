import './Navbar.styles.scss';

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-left">
          <div className="nav-left-heading">
            <h3>Movie Trailers</h3>
          </div>
          <div className="nav-left-buttons">
            <button className="nav-button active">Coming Soon</button>
            <button className="nav-button">Now Showing</button>
          </div>
        </div>
        <div className="nav-right">
          Checkbox Checkbox Checkbox
          {/* <Checkbox />
        <Checkbox />
        <Checkbox /> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
