import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
     <Weather defaultCity="New York" />

<footer>
  <a href="https://github.com/vikchvk/weather-react" target="_blank" rel="noreferrer">
              Open-source code
            </a>
            by Viktoriia Chvykova
 </footer>
    </div>
  );
}
