import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Search from "./Search";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div>
        <h1>Weather App</h1>
        <Search />
        <small class="coder">
            <a
              href="https://github.com/vikchvk/new-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>
            by Viktoriia Chvykova
          </small>
      </div>
    </div>
  );
}
