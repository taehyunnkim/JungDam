import './scss/App.scss';
import Nav from './components/layout/Nav';
import Landing from './components/layout/Landing';
import Menu from './components/layout/Menu';
import Gallery from './components/layout/Gallery';
import Footer from './components/layout/Footer';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import React, {useState, useEffect} from 'react';

function App() {
  const [showNav, setNav] = useState("hideNav");
  const [page, setPage] = useState("home");
  const [menu, setMenu] = useState("premium");

  useEffect(() => {
    const handleScroll = () => {
      if(window.pageYOffset > 50) {
        if(showNav !== "") setNav("revealNav");
      } else if(window.pageYOffset <= 50) {
        setNav("");
      }
    }

    window.addEventListener('scroll', handleScroll);
  }, [setNav, showNav]);
  
  return (
    <BrowserRouter>
      <HelmetProvider>
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
              <Helmet>
                  <title>정담 메뉴</title>
                  <meta
                    name="description"
                    content="늘 신선하고 깨끗한 맛으로 건강까지 채워드리겠습니다."
                  />
              </Helmet>
              <Menu setPage={setPage} menu={menu} />
            </Route>
            <Route path="/gallery">
              <Helmet>
                  <title>정담 갤러리</title>
                  <meta
                    name="description"
                    content="청결한 위생으로 안전한 먹거리를 제공하겠습니다."
                  />
              </Helmet>
              <Gallery setPage={setPage} />
            </Route>
            <Route exact path="/">
              <Helmet>
                <title>정담도시락</title>
                <meta
                  name="description"
                  content="행복을 담은 도시락, 정성을 담은 도시락으로 건강과 행복을 드리겠습니다."
                />
              </Helmet>
              <Landing setPage={setPage} />
            </Route>
            <Redirect from="*" to="/" />
          </Switch>
          <Footer />
        </div>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
