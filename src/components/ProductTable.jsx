import './ProductTable.css';

const ProductTable = ({ products }) => {
  return (
    <div className="product-table-container">
      <div className="table-header">
        <h3>Top Selling Products</h3>
      </div>
      <div className="table-content">
        <table className="product-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td className="product-name">{product.name}</td>
                <td className="product-price">{product.price}</td>
                <td className="product-quantity">{product.quantity}</td>
                <td className="product-amount">{product.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;