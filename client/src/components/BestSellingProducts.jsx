import { useEffect, useState } from "react";

const BestSellingProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, []);

  return (
    <section className="py-5">
      <div className="container-lg">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header d-flex flex-wrap justify-content-between mb-5">
              <h2 className="section-title">Best Selling Products</h2>
              <div className="d-flex align-items-center">
                <a href="#" className="btn btn-primary">View All</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {products.map((product) => (
            <div key={product._id} className="col-md-3">
              <div className="product-item">
                <figure>
                  <a href="product.html" title={product.name}>
                    <img src={product.image} alt={product.name} className="tab-image" />
                  </a>
                </figure>
                <div className="d-flex flex-column text-center">
                  <h3 className="fs-6 fw-normal">{product.name}</h3>
                  <p className="text-muted">{product.description}</p>
                  <div className="d-flex justify-content-center align-items-center gap-2">
                    <span className="text-dark fw-semibold">${product.price}</span>
                  </div>
                  <div className="button-area p-3 pt-0">
                    <a href="#" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart">Add to Cart</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellingProducts;
