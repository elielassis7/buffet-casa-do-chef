import { Outlet } from "react-router-dom";

export function AdminLayout() {

  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Outlet />
    </div>
  )
}