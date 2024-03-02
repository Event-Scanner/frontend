import Scanner from "../../components/scanner";
import { useState } from "react";

function Scan() {
  const [result, setResult] = useState("");

  function handleScan(data) {
    if (data) {
      if (data["text"]) setResult(data["text"]);
    }
  }

  function handleError(err) {
    console.error(err);
  }

  return (
    <div className="text-center h-screen">
      <p className="text-2xl font-bold p-4">Scan the QR Code</p>
      <Scanner handleScan={handleScan} handleError={handleError} />
      <div className="p-2">
        <p>{result}</p>
      </div>
    </div>
  );
}

export default Scan;
