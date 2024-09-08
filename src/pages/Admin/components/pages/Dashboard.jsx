import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

const Dashboard = () => {
  return (
    <div className="flex">
      <Navbar />
      <main className="flex-1 p-2 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
