import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Signin from "./pages/Signin";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signin" element={<Signin />}  />
    </Routes>
    </>
  );
}

export default App;
