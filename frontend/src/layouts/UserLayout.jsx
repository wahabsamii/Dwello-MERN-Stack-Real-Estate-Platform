
import { Outlet } from 'react-router-dom';
import Sidebar from '../pages/Users/Sidebar';
import Topbar from '../pages/Users/Topbar';

export default function UserLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-6 bg-gray-100 min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
}