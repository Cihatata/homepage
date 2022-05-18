// import { useTheme } from "next-themes";
import NavItem from "./nav-item";

const MENU = {
  "/": "Giriş",
  "/videos": "Eğitimler",
  "/photos": "Fotoğraf",
  "/notes": "Notes",
  "/bookmarks": "Yer imleri",
};

function Header() {
  // const { resolvedTheme, setTheme } = useTheme();

  return (
    <header>
      <div className="c-small">
        <div className="space-x-1 border-b border-gray-100 py-6 dark:border-gray-800">
          <nav>
            {Object.keys(MENU).map((path) => {
              return (
                <NavItem key={path} href={path}>
                  {MENU[path]}
                </NavItem>
              );
            })}
            {/*<button
              className="c-small"
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
            >
              {resolvedTheme === "dark" ? "🌝" : "🌚"}
            </button>*/}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
