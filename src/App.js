import './App.css';
import { BrowserRouter } from "react-router-dom";
import RoutesList from './RoutesList';

/**
 * Component for the App
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RoutesList/>
      </BrowserRouter>
    </div>
  );
}

export default App;
