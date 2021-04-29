import './App.css';
import ContactForm from './pages/ContactForm'
import Header from './pages/Header'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <div >
      <Header/>
      <Services/>
      <Portfolio/>
      <ContactForm/>
    </div>
  );
}

export default App;
