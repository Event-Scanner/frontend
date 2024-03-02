import QrReader from "react-qr-scanner";
import { useState } from "react";

function Scanner() {
  const delay = 100;
  const previewStyle = {
    width: "70%",
  };
  const [result, setResult] = useState("");

  function handleError(err) {
    console.error(err);
  }

  function handleScan(data) {
    console.log(data);
    setResult(data);
  }

  return (
    <div>
      <QrReader
        delay={delay}
        onError={handleError}
        onScan={handleScan}
        style={previewStyle}
      />
    </div>
  );
}

export default Scanner;
