import './styles/main.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';

// pages
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Resume from './pages/Resume/Resume';
import Work from './pages/Work/Work';
import Contact from './pages/Contact/Contact';

function App() {

  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/work" element={<Work/>} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  )
}

export default App
