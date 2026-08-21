import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Work from "./Pages/Work"
import Services from "./Pages/Services"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Playground from "./Pages/Playground"
import Cursor from "./Components/Cursor"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/work/:category" element={<Work />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/playground" element={<Playground />} />
    </Routes>
    </BrowserRouter>

    <Cursor />
    </>
  )
}

export default App
