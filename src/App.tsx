// config router
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom"

// pages
import ErrorPage from "./pages/ErrorPage"
import Root from "./pages/@Root"
import Home from "./pages/Home"
import Documentation from "./pages/documentation/@Documentation"

// routes
import testRoutes from "./routes/test.routes"
import docRoutes from "./routes/documentation/doc.routes"

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
        path="/docs"
        element={<Documentation />}
      >
        {docRoutes}
        {testRoutes}
      </Route>
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