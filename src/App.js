// import FormHook from "./components/FormHook";
// import Header from "./components/Header";
// import RegisterUser from "./components/RegisterUser";
// import TodoApp from "./components/TodoApp";

import { Routes, Route } from "react-router-dom";
import ApiCall from "./components/ApiCall";
import AsyncBasics from "./components/AsyncBasics";
import HigherOrderComponent from "./components/HigherOrderComponent";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";


function App() {
  
  return (
    <div className=" bg-teal-100 min-h-screen">
     {/* <h1>Async JS</h1> */}
      {/* <HookuseEffect/> */}
      {/* <AsyncBasics/> */}
        {/* <HigherOrderComponent>
          <ApiCall/>
        </HigherOrderComponent> */}
     <Header/>
      <Routes>
        <Route path='/' element={<ApiCall/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/cart' element={<CartPage/>} />
      </Routes>
      <h1>Footer</h1>

    </div>
  );
}

export default App;
