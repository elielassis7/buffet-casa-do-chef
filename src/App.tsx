import { RouterProvider } from "react-router-dom";
import { router } from "./routes";


export function App() {


  return (
    <div className="bg-bordo min-h-screen antialiased">
      <RouterProvider router={router} />
    </div>
  )
}


