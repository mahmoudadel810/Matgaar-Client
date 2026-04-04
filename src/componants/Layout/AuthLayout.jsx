import { Navigate, Outlet } from 'react-router-dom'

import Register from '../Register/Register'

export default function AuthLayout() {
  const token = localStorage.getItem('token')

  // Has token → send to home, no need to see login/register
  if (token) {
    return <Navigate to="/home" replace />
  }

  // No token → render the child route (Login or Register)
  return Register
}