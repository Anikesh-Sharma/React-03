import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../Datacontext';

function Products() {
  const { products, loading, error } = useContext(DataContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title} - ${product.price}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
