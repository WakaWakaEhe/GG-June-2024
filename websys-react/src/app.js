import { Routes, Route } from 'react-router-dom';
import Root from "./routes/Root";
import RecipePage from "./routes/RecipePage";
import Dish, { loader as dishLoader } from "./routes/Dish";
import Region, { loader as regionLoader } from "./routes/Region";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Routes>
        <Route path="/verdida-viola/" element={<Root />} />
        <Route path="/verdida-viola/recipe" element={<RecipePage />} />
        <Route path="/recipes/:dishId" element={<Dish />} />
        <Route path="/regions/:regionId" element={<Region />} />
      </Routes>
    </div>
  );
}

export default App;
