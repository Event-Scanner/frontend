import Scanner from "../../components/scanner";
import { useState } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

function Scan() {
  const defaultSate = {
    message: "",
    data: {
      name: "",
      email: "",
      GATE: "",
      HALL: "",
    },
  };
  const [result, setResult] = useState(defaultSate);
  const [status, setStatus] = useState(200);
  const [spinner, setSpinner] = useState(false);

  const handleScan = async (data) => {
    if (data) {
      if (data["text"]) {
        setSpinner(true);
        setResult(defaultSate);
        const userId = data["text"].split("|")[0];
        const entryType = data["text"].split("|")[1];
        await axios
          .post(
            `${process.env.REACT_APP_API_URL}/api/user/scan`,
            {
              userId,
              entryType,
            },
            {
              headers: {
                Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            setStatus(response.status);
            setResult({
              message: response.data["message"],
              data: {
                name: response.data["data"]["name"],
                email: response.data["data"]["email"],
                GATE: response.data["data"]["GATE"],
                HALL: response.data["data"]["HALL"],
              },
            });
            setSpinner(false);
          });
      }
    }
  };

  function handleError(err) {
    console.error(err);
  }

  return (
    <div className="text-center h-screen">
      <p className="text-2xl font-bold p-4">Scan the QR Code</p>
      {spinner ? (
        <ClipLoader />
      ) : (
        <Scanner handleScan={handleScan} handleError={handleError} />
      )}

      <div className="p-2">
        <p className={status === 200 ? "text-green" : "text-red"}>
          Message = {result["message"] || ""}
        </p>
        <p>Name = {result["data"]["name"] || ""}</p>
        <p>Email = {result["data"]["email"] || ""}</p>
        <p>Gate Entry = {result["data"]["GATE"] === true ? "true" : "false"}</p>
        <p>Hall Entry = {result["data"]["HALL"] === true ? "true" : "false"}</p>
      </div>
    </div>
  );
}

export default Scan;
