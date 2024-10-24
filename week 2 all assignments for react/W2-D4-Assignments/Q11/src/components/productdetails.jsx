import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../Datacontext';

function ProductDetails() {
  const { id } = useParams();
  const { product, fetchProduct, loading, error } = useContext(DataContext);

  useEffect(() => {
    fetchProduct(id);
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          <p>Description: {product.description}</p>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}

export default ProductDetails;
