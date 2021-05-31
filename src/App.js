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
  const [menu, setMenu] = useState("premium");

  useEffect(() => {
    const handleScroll = () => {
      if(window.pageYOffset > 40) {
        if(showNav !== "") setNav("revealNav");
      } else if(window.pageYOffset <= 40) {
        setNav("");
      }
    }

    window.addEventListener('scroll', handleScroll);
  }, [setNav, showNav]);
  
  return (
    <BrowserRouter>
      <div className="masterContainer">
      {page !== "home" ? 
        <div id="lines" className="full">
          <div className="bgLine leftLine"></div>
          <div className="bgLine middleLine"></div>
          <div className="bgLine rightLine"></div>
        </div>
          : 
        <div id="lines">
          <div className="bgLine middleLine"></div>
        </div>
        }

        <Nav showNav={showNav} page={page} setMenu={setMenu} />
        <Switch>
          <Route path="/menu">
            <Menu setPage={setPage} menu={menu} />
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
