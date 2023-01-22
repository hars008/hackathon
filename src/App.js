import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Layout from './components/layout';
import Main from "./components/pages/loginPage";
import Movies from "./components/pages/moviespage";
import Rec from "./components/pages/recommendationspage";
import About from "./components/pages/about";
import Registration from "./components/pages/registrationpage";
import Mainpage from "./components/pages/mainpage"
function App() {
  return (
    <div className="App">
      
      <Layout>
      <Routes>
        <Route path="/home" element={<Mainpage />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/recommendations" element={<Rec />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/loginPage" element={<Main />}/>
          <Route path="/Register" element={<Registration />} />
      </Routes>
      </Layout>
       </div>
  );
}
export default App;
