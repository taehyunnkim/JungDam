import './App.scss';
import Nav from './components/layout/Nav'

function App() {
  return (
    <div className="masterContainer">
      <div className="bgLine leftLine"></div>
      <div className="bgLine middleLine"></div>
      <div className="bgLine rightLine"></div>
      <Nav />
    </div>
  );
}

export default App;
