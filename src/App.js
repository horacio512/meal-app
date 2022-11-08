import HeaderNav from "./components/HeaderNav";
import Home from "./components/Home";
import CardDetail from "./components/CardDetail";
import RecipeReviewCard from "./components/CardComponent";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderNav />
        <Routes>
          <Route path="/meal-app" element={<Home />} />
          <Route path="/get-Started" element={<RecipeReviewCard />} />
          <Route path="weekly-detail" element={<CardDetail />} />
          <Route path="*" element={<h1>Error 404 Page Not Found</h1>} />
        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
