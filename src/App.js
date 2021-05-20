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
import React, {useState, useEffect} from 'react';

function App() {
  const [showNav, setNav] = useState("hideNav");
  const [page, setPage] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if(window.pageYOffset > 60) {
        if(showNav !== "") setNav("revealNav");
      } else if(window.pageYOffset <= 60) {
        setNav("");
      }
    }

    window.addEventListener('scroll', handleScroll);
  }, [setNav, showNav]);
  
  return (
    <BrowserRouter>
      <div className="masterContainer">
        <div id="lines">
          <div className="bgLine leftLine"></div>
          <div className="bgLine middleLine"></div>
          <div className="bgLine rightLine"></div>
        </div>
        <Nav showNav={showNav} page={page} />
        <Switch>
          <Route path="/menu">
            <Menu setPage={setPage} />
          </Route>
          <Route path="/gallery">
            <Gallery setPage={setPage} />
          </Route>
          <Route exact path="/">
            <Landing setPage={setPage} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
