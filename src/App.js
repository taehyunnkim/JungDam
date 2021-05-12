import './App.scss';
import Nav from './components/layout/Nav';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState('home');
  let pageComp = <Landing setPage={setPage} />
  if(page === 'home') {
    pageComp = <Landing setPage={setPage} />;
  } else if(page === 'menu') {
    pageComp = <div>Menu</div>;
  } else {
    pageComp = <div>Gallery</div>;
  }

  return (
    <div className="masterContainer">
      <div className="bgLine leftLine"></div>
      <div className="bgLine middleLine"></div>
      <div className="bgLine rightLine"></div>
      <Nav setPage={setPage} currentPage={page} />
      { pageComp }
      <Footer />
    </div>
  );
}

export default App;
