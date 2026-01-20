import "../css/Header.css";
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="flex-row">
        <img className="logo" src="./src/images/logo.png" alt="logo-gorsel" />
        <p className="logo-text">Birgül D.M.</p>
      </div>

      <div className="flex-row">
        <input
          className="search-input"
          type="text"
          placeholder="Bir şeyler ara.."
        />
        <div>
          {theme === "light" ? (
            <FaMoon className="icon" onClick={toggleTheme} />
          ) : (
            <CiLight className="icon" onClick={toggleTheme} />
          )}

          <CiShoppingBasket className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
