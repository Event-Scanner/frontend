import QrReader from "react-qr-scanner";
import { useState } from "react";

function Scanner() {
  const delay = 100;
  const previewStyle = {
    width: "60%",
  };
  const [result, setResult] = useState("");

  function handleError(err) {
    console.error(err);
  }

  function handleScan(data) {
    if (data) {
      if (data["text"]) setResult(data["text"]);
    }
  }

  return (
    <div>
      <QrReader
        className="mx-auto"
        constraints={{
          audio: false,
          video: { facingMode: "environment" },
        }}
        delay={delay}
        onError={handleError}
        onScan={handleScan}
        style={previewStyle}
      />
      <div className="p-2">
        <p>{result}</p>
      </div>
    </div>
  );
}

export default Scanner;
