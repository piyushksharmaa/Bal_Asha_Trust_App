import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
const Header = (login) => {
  return (
    <nav>
      <img
        src="https://balashatrust.org/wp-content/themes/children-charity/theme-vars/theme-style/img/logo_scroll_retina.png"
        alt="Logo"
      />
      {login === true ? (
        <main>
          <Link to="/About">About Us</Link>
          <Link to="/Projects">Our Projects</Link>
          <Link to="/impact">Impact</Link>
          <Link to="/Contact">Contact Us</Link>
          <Link to="/Login">Login</Link>
          <Link to="/Donate">Donate Now!</Link>
        </main>
      ) : (
        <main>
          <Link to="/About">About Us</Link>
          <Link to="/Projects">Our Projects</Link>
          <Link to="/impact">Impact</Link>
          <Link to="/Contact">Contact Us</Link>
          <Link to="/Donate">Donate Now!</Link>
          <div className="icon">
            <PersonIcon />
          </div>
        </main>
      )}
    </nav>
  );
};

export default Header;
