import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import SelectedCountry from "./pages/SelectedCountry"
import './style/index.scss'
import { ThemeProvider } from "./Context/ThemeContext"

function App() {
  return (
      <BrowserRouter>
        <ThemeProvider>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/:id" element={<SelectedCountry />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
  )
}

export default App