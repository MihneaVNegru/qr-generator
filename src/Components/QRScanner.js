import React, { useState } from "react";
import QrScanner from 'react-qr-scanner';


function QRScanner() {
  const [data, setData] = useState("No result");

  // Functia de manipulare a rezultatelor
  const handleScan = (result) => {
    if (result) {
      setData(result.text); // Setează rezultatul scanat
    }
  };

  // Functia de manipulare a erorilor
  const handleError = (error) => {
    console.error(error); // Afișează eroarea în consola
  };

  return (
    <div style={{ textAlign: "center", padding: "1rem" }}>
      <h2>QR Code Scanner</h2>
      <QrScanner
        onScan={handleScan} // Folosește onScan pentru a captura rezultatele
        onError={handleError} // Asigură-te că ai definit o funcție pentru erori
        style={{ width: "300px", margin: "0 auto" }} // Stilizează scannerul
      />
      <p>{data}</p> {/* Afișează rezultatul scanării */}
    </div>
  );
}

export default QRScanner;
