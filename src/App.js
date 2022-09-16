import logo from './logo.svg';
import './App.css';
import Countrylist from "./Countrylist";
import Post from "./Post";
import Mytable from "./Mytable";
import Navigation from "./components/Navigation";
import Myroute from "./components/Myroute";
import Mynav from "./components/Mynav";
import {BrowserRouter} from "react-router-dom";
import Demo from "./demo";
import Son from "./components/Son";
import {dadaprovider} from "./components/Mycontext";


function App() {
  return (
    <div>
        <dadaprovider value="dada sent msz to puti">
            <Son/>
        </dadaprovider>
    </div>
  );
}

export default App;
