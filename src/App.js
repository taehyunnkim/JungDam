import './App.scss';
import Nav from './components/layout/Nav';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="masterContainer">
      <div className="bgLine leftLine"></div>
      <div className="bgLine middleLine"></div>
      <div className="bgLine rightLine"></div>
      <Nav />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
