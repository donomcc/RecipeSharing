import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailScreen from "./components/detailComponents/DetailScreen";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/homeComponents/HomeScreen";
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen";


function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <Routes>
        <Route index element={<HomeScreen />}></Route>
        <Route path='newRecipe' element={<NewRecipeScreen />}></Route>
        <Route path='recipe/:id' element={<DetailScreen />}></Route>
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
