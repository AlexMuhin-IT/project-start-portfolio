import './App.css';
import {Footer} from './layout/footer/Footer';
import {Header} from './layout/header/Header';
import {Contact} from './layout/sections/contacts/Contacts';
import {Main} from './layout/sections/main/Main';
import {Projects} from './layout/sections/projects/Projects';
import {Skills} from './layout/sections/skills/skill/Skills';
import {Services} from "./layout/sections/group/Services";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Services/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
}


export default App;
