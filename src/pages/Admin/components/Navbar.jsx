import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white w-72 h-full min-h-screen px-5 sticky top-0 py-20">
      <div className="logo font-bold text-xl mb-6">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          CareCrest - Admin
        </h2>
      </div>
      <ul className="space-y-4 mt-10">
        <li>
          <Link to="/admin" className="hover:text-blue-400">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin/users" className="hover:text-blue-400">
            Users
          </Link>
        </li>
        <li>
          <Link to="/admin/doctors" className="hover:text-blue-400">
            Doctors
          </Link>
        </li>
        <li>
          <Link to="/admin/departements" className="hover:text-blue-400">
            Departments
          </Link>
        </li>
        <li>
          <Link to="/admin/inventory" className="hover:text-blue-400">
            Meds
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
