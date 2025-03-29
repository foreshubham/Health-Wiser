import React from 'react';
import ProductForm from '../../components/ProductForm';

const AddProductPage: React.FC = () => {
  return (
    <div className="container">
      <h1 className="text-center">Add Product</h1>
      <ProductForm />
    </div>
  );
};

export default AddProductPage;
