import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Work from "./Pages/Work"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/work" element={<Work />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
