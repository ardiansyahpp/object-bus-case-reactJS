import './App.css';
import Navbar from './Navbar'
import Home from "./Home"
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="contents">
        <Home />
      </div>
    </div>
  );
}

export default App;
