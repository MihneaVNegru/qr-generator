import React from "react";
import QRCodeGenerator from "./Components/QRCodeGenerator";
import QRScanner from "./Components/QRScanner"; // Activează când adaugi scanner-ul
import "./styles.css";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>QR Code Application</h1>
      <QRCodeGenerator />
      <QRScanner />
    </div>
  );
}

export default App;
