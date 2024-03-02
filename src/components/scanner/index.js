import QrReader from "react-qr-scanner";

function Scanner(props) {
  const delay = 100;
  const previewStyle = {
    width: "60%",
  };

  return (
    <div>
      <QrReader
        className="mx-auto"
        constraints={{
          audio: false,
          video: { facingMode: "environment" },
        }}
        delay={delay}
        onError={props.handleError}
        onScan={props.handleScan}
        style={previewStyle}
      />
    </div>
  );
}

export default Scanner;
