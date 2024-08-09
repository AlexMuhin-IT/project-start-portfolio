import './App.css';
import {Footer} from './layout/footer/Footer';
import {Header} from './layout/header/Header';
import {Contact} from './layout/sections/contacts/Contacts';
import {Main} from './layout/sections/main/Main';
import {Projects} from './layout/sections/projects/Projects';
import {Skills} from './layout/sections/skills/Skills';
import {Services} from "./layout/sections/services/Services";
import {Particle} from "./components/particle/Particle";

function App() {
    return (
        <div className="App">
            <Particle/>
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
/*
 вопросы:
 Header на мобилке?!
немогу достучатся в Project  Text = styled.p
*/

export default App;
