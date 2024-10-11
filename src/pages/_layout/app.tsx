import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import React from "react";


export function AppLayout() {
  return (
    <div className="flex flex-col antialiased">
      <Header />

      <Outlet />

    </div>
  )
}