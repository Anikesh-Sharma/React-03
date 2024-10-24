import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/about';
import ProductDetails from './components/productdetails';
import Products from './components/products';
import Home from './components/home';
import { DataProvider } from "./Datacontext";

function App() {
  return (
    <DataProvider>
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;