import { Route, Routes } from "react-router-dom"
import { MainLayout } from "./layout/layout"
import { mainPage } from "./routes/mainRoutes"
import { ShopSingle } from "./pages/ShopSingle"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {mainPage.map((route, i) => (
            <Route
              index={route.path ? true : false}
              key={i}
              path={route.path}
              element={route.component}
            />
          ))}
          <Route path="shopsingle/:id" element={<ShopSingle/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
