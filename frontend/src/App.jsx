import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/index.jsx';
import Home from './components/homepage/Home';
import Footer from './components/footer/footer';
import Login from './components/login';
import FloatingIcons from './components/FloatingIcons';
import ConsultationPage from './components/ConsultationPage';
import ProSignIn from './components/ProSignIn';
import QuoteModal from './components/modal/QuoteModal.jsx';

// New wrapper to access `useLocation` outside of Router
function LayoutWrapper({ children }) {
  const location = useLocation();

  // Hide navbar and footer on login and pro-login pages
  const hideNavbarFooter = location.pathname === '/sawtar/login' || location.pathname === '/sawtar/pro-login';

  return (
    <div className="min-h-screen relative">
      {!hideNavbarFooter && <Navbar />}
      {children}
      {!hideNavbarFooter && <Footer />} 
      <FloatingIcons />
    </div>
  );
}

function App() {
  return (
      <LayoutWrapper>
          <QuoteModal/>
        <Routes>
          <Route path="/sawtar/" element={<Home />} />
          <Route path="/sawtar/login" element={<Login />} />
          <Route path="/sawtar/pro-login" element={<ProSignIn />} />
          <Route path="/sawtar/consultation" element={<ConsultationPage />} />
          {/* Add other routes here */}
        </Routes>
      </LayoutWrapper>
  );
}

export default App;
