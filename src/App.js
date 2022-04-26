import ContactUs from './components/ContactUs/ContactUs.jsx';
import './components/Home/Home.jsx';
import Home from './components/Home/Home.jsx';
import Skills from './components/Skills/Skills.jsx';
import Pricing from './components/Pricing/Pricing';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <div className='App'>
      <Home />
      <Skills />
      <AboutUs />
      <Pricing />
      <ContactUs />
    </div>
  );
}

export default App;
