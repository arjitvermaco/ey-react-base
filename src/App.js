import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatergoryPage from "./pages/CatergoryPage";
import Header from "./components/Header";
import ProductPage from "./pages/ProductPage";

function App() {
  
  return (
   <>
   <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/category/:id" element={<CatergoryPage/>}/>
      <Route path="/product/:id" element={<ProductPage/>}/>
    </Routes>
   </>
  );
}

export default App;
