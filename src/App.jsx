import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <div>
        {/* 
        set up routing here 
        only one route to dashboard  
        */}

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
