
import { Outlet } from 'react-router-dom';
import Sidebar from '../pages/Admin/Sidebar';
import Topbar from '../pages/Admin/Topbar';

export default function AdminLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-6 bg-gray-100 min-h-screen overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}