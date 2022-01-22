import ProductRow from './ProductRow';
import { Component } from 'react';

class ProductTable extends Component {
  render() {
    return (
      <div className="product-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((el, index) => {
              return (
                // return component ProductRow with each <tr> </tr>
                class ProductRow extends components{
                
            
                <tr key={index}>
                  <td>{el.name}</td>
                  <td>{el.price}</td>
                </tr>
            
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
