import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import React from "react";
import WhatsAppIcon from '/whatsapp-color.svg'


export function App() {


  return (
    <div className="bg-bordo min-h-screen sm:max-sm:w-screen antialiased">
      <a
        type="button"
        href="https://wa.me/5544998882471"
        target="_blank"
        className="z-30 fixed bottom-6 right-6 size-10 rounded-full bg-[#25D366] cursor-pointer hover:-translate-y-1 active:scale-95 transform duration-300 ease-linear"
      >
        <img src={WhatsAppIcon} alt="" className="size-full" />
      </a>
      <RouterProvider router={router} />
    </div>
  )
}


