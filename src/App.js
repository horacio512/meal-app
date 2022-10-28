import HeaderNav from "./components/HeaderNav";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
    <BrowserRouter>
      <HeaderNav />
      <Routes>
        <Route path="/meal-app" element={<Home />} />
        <Route path="*" element={<h1>Error 404 Page Not Found</h1>} />
      </Routes>


    </BrowserRouter>
    </div>
  );
}

export default App;
