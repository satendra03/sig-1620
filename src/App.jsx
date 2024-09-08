import { lazy, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import Signinpage from './pages/SignIn/Signinpage'
import viteLogo from '/vite.svg'
import { Button } from './components/ui/button';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Nopage from './pages/NoPage/Nopage';
import Departments from './pages/Departments/Departments';
import SelectTime from './pages/Departments/SelectTime/SelectTime';
import ChartPage from './pages/Chart/Chart';
import Login from './pages/LogIn/Login';
import Links from './pages/Links/Links';
import { Context } from './context/Context';
import DepartmentInfo from './pages/Departments/DepartmentInfo/DepartmentInfo';
import Loading from './pages/Loading/Loading';
import Footer from './pages/Footer/Footer';
import Nav from './components/customs/Nav';
import { Settings } from 'lucide-react';
import AboutUs from './pages/Aboutus/Aboutus';
import BedAvailabilityPage from './pages/BedAvailability/BedAvailabilityPage';
import Dashboard from './pages/Admin/components/pages/Dashboard';
import Departements from './pages/Admin/components/pages/Departements';
import Doctors from './pages/Admin/components/pages/Doctors';
import Overview from './pages/Admin/components/pages/Overview';
import Inventory from './pages/Admin/components/pages/Inventory';
import User from './pages/Admin/components/pages/User';

function App() {
  const { user } = useContext(Context);
  const location = useLocation();

  return (
    <>
      <div className="layout px-20  w-screen overflow-hidden"></div>

      {!location.pathname.startsWith('/admin') && (
        <div className="navbar fixed top-0 left-0 w-full z-[999]">
          <nav className='px-16 py-5 w-full bg-white/20 top-0 backdrop-blur-xl'>
            <div className="w-full p-1 flex items-center justify-between">
              <div className="logo  font-extrabold text-xl">
                <Link to={"/"} >CareCrest</Link>
              </div>
              <div className="navlinks">
                <Nav className="z-30" />
              </div>
              <div className="login-signup-button">
                <Link to={"/login"}>
                  <Button>Log In</Button>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}

      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signinpage />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/departments' element={<Departments />} />
        <Route path="/departments/:departmentName/book" element={<SelectTime />} />
        <Route path="/departments/:departmentName/info" element={<DepartmentInfo />} />
        <Route path='/chart' element={<ChartPage />} />
        <Route path='/beds' element={<BedAvailabilityPage />} />
        <Route path='/admin/*' element={<Dashboard />}>
          <Route index element={<Overview />} />
          <Route path='users' element={<User />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="departements" element={<Departements />} />
          <Route path="inventory" element={<Inventory />} />
        </Route>

        <Route path='*' element={<Nopage />} />
      </Routes>

      {!location.pathname.startsWith('/admin') && (
        <div className="footer">
          <Footer />
        </div>
      )}
    </>
  )
}


export default App
