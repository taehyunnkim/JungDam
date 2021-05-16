import './App.scss';
import Nav from './components/layout/Nav';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="masterContainer">
        <div id="lines">
          <div className="bgLine leftLine"></div>
          <div className="bgLine middleLine"></div>
          <div className="bgLine rightLine"></div>
        </div>
        <Nav />
        <Switch>
          <Route exact strict path="/menu">
          </Route>
          <Route exact strict path="/gallery">
          </Route>
          <Route exact strict path="/">
            <Landing />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
