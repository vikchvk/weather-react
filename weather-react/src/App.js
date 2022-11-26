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
  This project was coded by {" "}<a href="https://github.com/vikchvk" target="_blank" rel="noreferrer" >Viktoriia Chvykova</a>
   {" "}and is{" "} <a 
href="hhttps://github.com/vikchvk/weather-react"
 target="_blank" rel="noreferrer" > open-sourced on GitHub</a>
 </footer>
    </div>
  );
}
