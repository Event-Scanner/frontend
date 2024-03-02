import { Link } from "react-router-dom";

function Button() {
  return (
    <div className="flex justify-center items-center h-screen">
      <button type="button">
        <Link to="/scan">
            Scan Me
        </Link>
      </button>
    </div>
  );
}

export default Button;