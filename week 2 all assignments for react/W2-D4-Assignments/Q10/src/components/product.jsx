import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const params = {
        page: searchParams.get('page') || 1,
        limit: searchParams.get('limit') || 40,
        sort: searchParams.get('sort') || 'price',
        order: searchParams.get('order') || 'desc',
        filter: searchParams.get('filter')
      };

      const response = await axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products', { params });
      
      setProducts(response.data.data);
    } catch (err) {
      setError('Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [searchParams]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Products</h2>
      <div>
        <label>Filter by category:</label>
        <select
          value={searchParams.get('filter') || ''}
          onChange={(e) => setSearchParams({ ...searchParams, filter: e.target.value })}
        >
          <option value="">All</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
          <option value="homedecor">Home Decor</option>
        </select>
      </div>
      <div>
        <label>Sort by:</label>
        <select
          value={searchParams.get('sort') || 'price'}
          onChange={(e) => setSearchParams({ ...searchParams, sort: e.target.value })}
        >
          <option value="price">Price</option>
        </select>
        <select
          value={searchParams.get('order') || 'desc'}
          onChange={(e) => setSearchParams({ ...searchParams, order: e.target.value })}
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>
      <ul style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
        {products?.map(product => (
            <Link to={`/products/${product.id}`}>
            <div>
                <li key={product.id}>{product.name} - ${product.price}</li>
                <li>{product.brand}</li>
                <li>{product.title}</li>
                <img src={product.image} alt="" />
                <li>{product.category}</li>
            </div>
            </Link>
        ))}
      </ul>
    </div>
  );
}

export default Products;
