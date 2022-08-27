import React, { useEffect } from "react";
import { fetchAllProducts } from "../apis/api-product";
import { useDispatch, useSelector } from "react-redux";

const ProductsList = () => {
  const  {list: products} = useSelector(state => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);


  return (
    <div>
      <h1>Products</h1>
      <div className="container mt-4">
        <div className="row">
          {products.map((product, index) => (
            <div key={product.id} className="col-md-3 mb-4">
              <div className="card">
                <img src={product.thumbnail} alt="avatar" />
                <div className="card-body">
                  <h5 className="card-title">{`${product.title} ${product.price}`}</h5>
                  <p className="card-text">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;