import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Layout from './components/layout';
import Main from "./components/pages/loginPage";
import Movies from "./components/pages/moviespage";
import Rec from "./components/pages/recommendationspage";
import About from "./components/pages/about";

function App() {
  return (
    <div className="App">
      
      <Layout>
      <Routes>
        <Route path="/home" element={<Main />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/recommendations" element={<Rec />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/loginPage" element={<Main />}/>
      </Routes>
      </Layout>
       </div>
  );
}
export default App;
