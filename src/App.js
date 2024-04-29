import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { contactColumns, hotelColumns, roomColumns, userColumns } from "./datatablesource";
import NewHall from "./pages/newHall/NewHall";
import NewSlot from "./pages/newSlot/NewSlot";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute =({children})=>{
    const {user} =useContext(AuthContext);

    if(!user){
      return <Navigate to="/login"/>
    }
    return children;
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route path="login" element={<Login />} />
            <Route 
            index 
            element={
              // 
            <Home />
            // 
            } />
            
            <Route path="users">
              <Route index element={ 
            <List columns={userColumns}/>
            } />
              <Route path=":userId" element={
                 
                 <Single />
                 
              } />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="halls">
              <Route index element={<List columns={hotelColumns}/>} />
              <Route path=":productId" element={
                
                <Single />
                
              } />
              <Route
                path="new"
                element={<NewHall />}
              />
            </Route>
            <Route path="slots">
              <Route index element={<List columns={roomColumns}/>} />
              <Route path=":productId" element={
                
                <Single />
                
              } />
              <Route
                path="new"
                element={<NewSlot />}
              />
            </Route>
            <Route path="contact">
              <Route index element={<List columns={contactColumns}/>} />
              
              
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
