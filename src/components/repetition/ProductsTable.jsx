import products from "../../data/products";
import "./ProductsTable.css";
// eslint-disable-next-line
export default (props) => {
  function getLines() {
    return products.map((products, i) => {
      return (
        <tr key={products.id} className={i % 2 === 0 ? "Par" : "Impar"}>
          <td>{products.id}</td>
          <td>{products.name}</td>
          <td>$ {products.price.toFixed(2).replace(".", ",")}</td>
        </tr>
      );
    });
  }

  return (
    <div className="ProductsTable">
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{getLines()}</tbody>
      </table>
    </div>
  );
};
