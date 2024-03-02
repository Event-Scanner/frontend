import Scanner from "../../components/scanner";

function Scan() {
  return (
    <div className="text-center h-screen">
      <p className="text-2xl font-bold p-4">Scan the QR Code</p>
      <Scanner />
    </div>
  );
}

export default Scan;
