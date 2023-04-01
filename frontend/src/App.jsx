import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/hello")
      .then((response) => response.json())
      .then((data) => setMensaje(data.message))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{mensaje}</h1>
      </header>
    </div>
  );
}

export default App;
