import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Exercicio1 } from "./pages/exercicio-1";
import { Home } from "./pages/home";

export function AppRoutes() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercicio-1" element={<Exercicio1 />} />
      </Routes>
    </Router>
  )
}