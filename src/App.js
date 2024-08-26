import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Menubar from './portfolio/menubar';
import Home from "./portfolio/home";
import About from "./portfolio/about";
import Skill from "./portfolio/skill";
import Project from "./portfolio/project";
import Contact from "./portfolio/contact";


function App() {
  return (
    <div className="App">
     <Menubar></Menubar>
     <Home></Home>
     <About></About>
     <Skill></Skill>
     <Project></Project>
     <Contact></Contact>
    </div>
  );
}

export default App;
