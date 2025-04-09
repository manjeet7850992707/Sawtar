import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/INDEX.JSX';
import Home from './components/homepage/Home';
import Footer from './components/footer/footer';
import Login from './components/login';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
