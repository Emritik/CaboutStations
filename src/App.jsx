
import Navbar from "./Components/Header/Navbar"
import Footer from "./Components/Footer/Footer"

import { Outlet } from 'react-router-dom';




export default function App() {
 


return (
  <div>
    <Navbar id="navbar" />
    <Outlet />
    <Footer id="footer" />
  </div>
)
}