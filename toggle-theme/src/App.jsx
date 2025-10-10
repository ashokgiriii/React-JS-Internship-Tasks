import { useTheme } from "./context/ThemeContext";
import "./App.css";

function App() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <h1>Dark | Light Mode</h1>
      <button onClick={toggleTheme}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default App;
