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
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/service', element: <Service /> },
      { path: '/contact', element: <Contact /> }
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: '/auth', element: <Navigate to="/auth/sign-in" /> },
      { path: '/auth/sign-in', element: <SignIn /> },
      { path: '/auth/sign-up', element: <SignUp /> },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { path: '/admin', element: <Navigate to="/admin/control-panel" /> },
      { path: '/admin/control-panel', element: <ControlPanel /> },

    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])