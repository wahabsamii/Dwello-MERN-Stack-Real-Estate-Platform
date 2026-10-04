
import React from 'react';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import Home from './pages/Home';
import Footer from './components/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AddProperty from './pages/AddProperty';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Agents from './pages/Agents';

import Dashboard from './pages/Admin/Dashboard';
import Users from './pages/Admin/Users';
import Settings from './pages/Admin/Settings';
import AdminLayout from './layouts/AdminLayout';
import Properties from './pages/Admin/Properties';
import Logout from './pages/Admin/Logout';
import AgentsAdmin from './pages/Admin/Agents';

import UserDashboard from './pages/Users/UserDashboard';
import MyProperties from './pages/Users/MyProperties';
import UserLayout from './layouts/UserLayout';
import Profile from './pages/Users/Profile';

import AdminProtected from './components/AdminProtected';
import Details from './pages/Details';
import TermServices from './pages/TermServices';
import Faqs from './pages/Faqs';

import { ToastContainer } from 'react-toastify';


// ------------------------------------
// Main App Content
// ------------------------------------
function AppContent() {
  const location = useLocation();

  const hiddenPaths = ['/admin', '/user'];

  const hideNavbar = hiddenPaths.some(
    (path) =>
      location.pathname === path ||
      location.pathname.startsWith(`${path}/`)
  );

  const hideFooter = hiddenPaths.some(
    (path) =>
      location.pathname === path ||
      location.pathname.startsWith(`${path}/`)
  );

  return (
    <>
      <ToastContainer />

      {/* Show Navbar everywhere EXCEPT /admin and /user */}
      {!hideNavbar && <Navbar />}

      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/term-services" element={<TermServices />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/residence/:slug" element={<Details />} />


        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>

          <Route
            path="dashboard"
            element={
              <AdminProtected>
                <Dashboard />
              </AdminProtected>
            }
          />

          <Route
            path="agents"
            element={
              <AdminProtected>
                <AgentsAdmin />
              </AdminProtected>
            }
          />

          <Route
            path="users"
            element={
              <AdminProtected>
                <Users />
              </AdminProtected>
            }
          />

          <Route
            path="properties"
            element={
              <AdminProtected>
                <Properties />
              </AdminProtected>
            }
          />

          <Route path="settings" element={<Settings />} />

          <Route path="logout" element={<Logout />} />

        </Route>


        {/* User Routes */}
        <Route path="/user" element={<UserLayout />}>

          <Route
            path="dashboard"
            element={<UserDashboard />}
          />

          <Route
            path="myproperties"
            element={<MyProperties />}
          />

          <Route
            path="profile"
            element={<Profile />}
          />

          <Route
            path="logout"
            element={<Logout />}
          />

        </Route>

      </Routes>

      {/* Show Footer everywhere EXCEPT /admin and /user */}
      {!hideFooter && <Footer />}
    </>
  );
}


// ------------------------------------
// Root App
// ------------------------------------
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
