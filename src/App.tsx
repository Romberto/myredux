import { Route, Routes } from "react-router-dom";
import { Home } from "./components/page/Home/Home";
import { PATH } from "./utils/constans";

function App() {
  return(
  <div className="container">
    <Routes>
      <Route path={PATH.HOME} element={<Home/>}/>
    </Routes>
    

  </div>
  ) 
}

export default App;
