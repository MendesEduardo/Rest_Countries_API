import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import SelectedCountry from "./pages/SelectedCountry"
import './style/index.scss'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/:id" element={<SelectedCountry />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App