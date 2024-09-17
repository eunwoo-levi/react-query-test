import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full h-[70px] bg-orange-200 flex justify-center items-center gap-[20px] text-blue-700">
      <Link to="/">Home</Link>
      <Link to="/reactquery">React-Query</Link>
      <Link to="/reactqueries">React-Queries</Link>
    </div>
  );
}
