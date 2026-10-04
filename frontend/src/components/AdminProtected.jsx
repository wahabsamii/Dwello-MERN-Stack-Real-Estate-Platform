import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import { useEffect, useState } from "react";

const AdminProtected = ({ children }) => {
const [auth] = useAuth();
const [loading, setLoading] = useState(true);

useEffect(() => {
if (auth !== null) {
setLoading(false);
}
}, [auth]);

if (loading) return <div>Loading...</div>;

if (!auth?.user || auth?.user?.isAdmin !== true) {
 return <Navigate to="/" />;
}

return children;
};

export default AdminProtected;
