import './App.css';
import ProductCard from './ProductCard';
// import banana from './images/banana.jpg'
function App() {
  return (
    <div className="App">
      <ProductCard name="First Bite" img="banana" price="30" currency="$" />
    </div>
  );
}

export default App;
