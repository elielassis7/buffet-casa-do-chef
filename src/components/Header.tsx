import { NavLink } from "react-router-dom";
import { Home, ChefHat, HandPlatter, MessageCircleMore } from 'lucide-react'
import { Separator } from '@radix-ui/react-separator'
import React from "react";


export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6 ">
        <div className="flex flex-col items-center justify-center">
          <ChefHat className="size-8" />
          Logo
        </div>
        <Separator orientation="vertical" className="h-6  " />
        <nav className="flex items-center space-x-5 lg:space-x-7">
          <NavLink to="/buffet-casa-do-chef/" className="flex flex-row items-center justify-center gap-2 hover:text-yellow-200 hover:-translate-y-1 active:scale-95 duration-100 ease-linear ">
            <Home className="size-5 text-yellow-300  -translate-y-[2px]" />
            <span className="font-Josefin text-xl text-yellow-300 ">Inicio</span>
          </NavLink>

          <NavLink to="/buffet-casa-do-chef/service" className="flex flex-row items-center justify-center gap-2 hover:text-yellow-200 hover:-translate-y-1 active:scale-95 duration-100 ease-linear">
            <HandPlatter className="size-5 text-yellow-300 -translate-y-[2px]" />
            <span className="font-Josefin text-xl text-yellow-300 ">Serviços</span>
          </NavLink>

          <NavLink to="/buffet-casa-do-chef/contact" className="flex flex-row items-center justify-center gap-2 hover:text-yellow-200 hover:-translate-y-1 active:scale-95 duration-100 ease-linear">
            <MessageCircleMore className="size-5 text-yellow-300  -translate-y-[2px]" />
            <span className="font-Josefin text-xl text-yellow-300 ">Contatos</span>
          </NavLink>
        </nav>
        <div className="ml-auto flex items-center gap-2">

          {/* <AccountMenu /> */}
        </div>
      </div>
    </div>
  )
}