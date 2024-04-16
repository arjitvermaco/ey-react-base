import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import SettingsPage from "./pages/SettingsPage";

import ProtectedRoute from "./component/ProtectedRoute";
import Parent from "./component/Parent";
import Child from "./component/Child";
function App() {
  return (
    <>

    {/* <Parent>
      <Child/>
    </Parent> */}
{/* 
    <Parent/>
      <Child2/>
    </Parent> */}


   

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <SettingsPage />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
