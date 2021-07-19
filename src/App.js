import './App.css';

import Home from './components/title/title.jsx';
import Navbar from "./components/navbar/navbar.jsx";

function App() {
  return (
    <div>
      <div>
        <Navbar/>
        <div></div>
        <Home />
      </div>
    </div>
  );
}

export default App;
