import './App.css';
import Header from './components/header/header'
import Navbar from './components/navbar/navbar'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/service/service'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'




function App() {

return (
    <div className="App">

<Navbar/>
< Header/>
<About/>
<Experience/><br /><br /><br /><br /><br />
<Services/>
<Portfolio/>
<Testimonials/>
<Contact/>
<Footer/>

    </div>
  );
}

export default App;
