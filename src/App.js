import './scss/App.scss';
import Nav from './components/layout/Nav';
import Landing from './components/layout/Landing';
import Menu from './components/layout/Menu';
import Gallery from './components/layout/Gallery';
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
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
