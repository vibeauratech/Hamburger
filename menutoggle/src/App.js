import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
        <Hero />   
    </div>
  );
}

export default App;
