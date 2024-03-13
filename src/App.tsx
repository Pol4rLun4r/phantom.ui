// config router
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom"

// pages
import ErrorPage from "./pages/ErrorPage"
import Root from "./pages/@Root"
import Home from "./pages/Home"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
    >
      <Route
        index={true}
        element={<Home />}
      />
      <Route
        path="/*"
        element={<ErrorPage />}
      />
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App