import { Route, Routes } from "react-router-dom";
import { Home } from "./components/page/Home/Home";
import { AddReceptModul } from "./components/UI/AddReceptModal/AddReceptModul";
import { PATH } from "./utils/constans";

function App() {
  return(
  <div className="container">
    <Routes>
      <Route path={PATH.HOME} element={<Home/>}/>
      <Route path={PATH.ADDRECEPTMOMAL} element={<AddReceptModul/>}/>
    </Routes>
    

  </div>
  ) 
}

export default App;
