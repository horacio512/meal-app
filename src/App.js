import HeaderNav from "./components/HeaderNav";
import Home from "./Pages/Home";
import CardComponent from "./components/CardComponent";
import Favorites from "./Pages/Favorites";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./assets/styles.css"

function App() {
  return (
    <div className="background">
      <BrowserRouter>
        <HeaderNav />
        <Routes >
          <Route path="/meal-app" element={<Home />} />
          <Route path="/get-Started" element={<CardComponent />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<h1>Error 404 Page Not Found</h1>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
