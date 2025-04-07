import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/INDEX.JSX';
import Home from './components/herosection/Home';

function App() {
  return (
    <>
      <div className="min-h-screen bg-body  ">
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
