import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

function QRCodeGenerator() {
  const [text, setText] = useState("");
  const qrRef = useRef();

  const downloadQRCode = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qrcode.png";
    downloadLink.click();
  };

  return (
    <div style={{ textAlign: "center", padding: "1rem" }}>
      <input
        type="text"
        placeholder="Enter text to generate QR Code"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          padding: "0.5rem",
          width: "80%",
          maxWidth: "400px",
          marginBottom: "1rem",
        }}
      />
      <div ref={qrRef} style={{ marginTop: "1rem" }}>
        {text && <QRCodeCanvas value={text} size={256} level="H" />}
      </div>
      {text && (
        <button
          onClick={downloadQRCode}
          style={{
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Download QR Code
        </button>
      )}
    </div>
  );
}

export default QRCodeGenerator;
