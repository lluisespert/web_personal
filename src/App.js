import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import './App.css';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
