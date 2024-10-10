import { createBrowserRouter, Navigate } from 'react-router-dom'
import { AppLayout } from './pages/_layout/app'
import { Error } from './pages/error'
import { NotFound } from './pages/404'
import { Home } from './pages/app/home/index2'
import { Service } from './pages/app/service'
import { Contact } from './pages/app/contact'
import { AuthLayout } from './pages/_layout/auth'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'
import { AdminLayout } from './pages/_layout/admin'
import { ControlPanel } from './pages/admin/controlPanel'
import React from 'react'

export const router = createBrowserRouter([
  {
    path: '/buffet-casa-do-chef',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/buffet-casa-do-chef', element: <Home /> },
      { path: '/buffet-casa-do-chef/service', element: <Service /> },
      { path: '/buffet-casa-do-chef/contact', element: <Contact /> }
    ],
  },
  {
    path: '/buffet-casa-do-chef/auth',
    element: <AuthLayout />,
    children: [
      { path: '/buffet-casa-do-chef/auth', element: <Navigate to="/buffet-casa-do-chef/auth/sign-in" /> },
      { path: '/buffet-casa-do-chef/auth/sign-in', element: <SignIn /> },
      { path: '/buffet-casa-do-chef/auth/sign-up', element: <SignUp /> },
    ],
  },
  {
    path: '/buffet-casa-do-chef/admin',
    element: <AdminLayout />,
    children: [
      { path: '/buffet-casa-do-chef/admin', element: <Navigate to="/buffet-casa-do-chef/admin/control-panel" /> },
      { path: '/buffet-casa-do-chef/admin/control-panel', element: <ControlPanel /> },

    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])