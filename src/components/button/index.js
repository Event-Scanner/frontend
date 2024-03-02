import { Link } from "react-router-dom";

function Button() {
  return (
    <div className="flex justify-center items-center h-screen">
      <button type="button" className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link to="/scan">Scan Me</Link>
      </button>
    </div>
  );
}

export default Button;
