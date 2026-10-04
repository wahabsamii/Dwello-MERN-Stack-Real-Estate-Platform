import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';

export default function Logout() {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  useEffect(() => {
    // Clear admin session here
    setAuth({user: null, token:""});
    localStorage.removeItem('auth')
    navigate('/login');
  }, []);

  return <p>Logging out...</p>;
}