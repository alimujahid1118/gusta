import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Work from "./Pages/Work"
import Services from "./Pages/Services"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/work/:category" element={<Work />} />
      <Route path="/services" element={<Services />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
