import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ToDoInput from "./components/ToDoInput";
import { getTheme } from "./components/getTheme";


function App() {
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    localStorage.setItem("weather-theme", theme);
  }, [theme]);

  return (
    <div className={`main ${theme === "dark" ? "darkBackGround" : "lightBackGround"}`} >
      <main>
        <NavBar setTheme={setTheme} theme={theme}/>
        <ToDoInput theme={theme}/>
      
      </main>
    </div>
  );
}

export default App;
