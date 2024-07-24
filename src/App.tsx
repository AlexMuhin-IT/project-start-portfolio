import './App.css';
import {Footer} from './layout/footer/Footer';
import {Header} from './layout/header/Header';
import {Contact} from './layout/sections/contacts/Contacts';
import {Main} from './layout/sections/main/Main';
import {Projects} from './layout/sections/projects/Projects';
import {Skills} from './layout/sections/skills/skill/Skills';
import {Group} from "./layout/sections/group/Group";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Group/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
}


export default App;
