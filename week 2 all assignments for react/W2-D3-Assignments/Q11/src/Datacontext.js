import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create Context
const DataContext = createContext();

// Create a provider component
const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all products
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (err) {
      setError('Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  // Fetch a single product by ID
  const fetchProduct = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(response.data);      
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch product details');
    } 
  };

  // Fetch products on mount
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <DataContext.Provider value={{ products, product, fetchProduct, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
