import './App.scss';
import Nav from './components/layout/Nav'
import mainImage from './images/mid.png';
import Button from './components/Button';

function App() {
  return (
    <div className="masterContainer">
      <div className="bgLine leftLine"></div>
      <div className="bgLine middleLine"></div>
      <div className="bgLine rightLine"></div>
      <Nav />
      <div id="landing">
        <div id="introduction">
          <h1>NATURAL <br /> AND SINCERE</h1>
          <p>행복을 담은 도시락, 정성을 담은 도시락으로</p>
          <p>고객의 건강과 만족을 높이겠습니다.</p>
          <Button text="메뉴보기" type="primary" />
          <Button text="주문하기" type="secondary" />
        </div>
        <div id="landing-image">
          <img src={mainImage} draggable={false} alt="JungDam" />
        </div>
        <div id="filler"></div>
      </div>
    </div>
  );
}

export default App;
