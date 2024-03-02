import QrReader from "react-qr-scanner";
import { useState } from "react";

function Scanner() {
  const delay = 100;
  const previewStyle = {
    height: "60%",
  };
  const [result, setResult] = useState("");

  function handleError(err) {
    console.error(err);
  }

  function handleScan(data) {
    setResult(data);
    console.log(result);
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
    </div>
  );
}

export default Scanner;
