import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';


class ProductForm extends Component {
  state = {
    name: "",
    description: "",
    category: "",
    quantity: 0,
    price: 0,
  };

  handleChange = (e) => {
    if (e.target.name === "quantity" || e.target.name === "price") {
      this.setState({ [e.target.name]: parseFloat(e.target.value) });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Details Added:", this.state);
  };

  handleCancel = () => {
    this.setState({
      name: "",
      description: "",
      category: "",
      quantity: 0,
      price: 0,
    });
  };

  render() {
    return (
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div className="col-md-6">
          <form onSubmit={this.handleSubmit}>
            <h2>New Product</h2>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Description:</label>
              <input
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Category:</label>
              <input
                type="text"
                name="category"
                value={this.state.category}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Quantity:</label>
              <input
                type="number"
                name="quantity"
                value={this.state.quantity}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Price:</label>
              <input
                type="number"
                name="price"
                value={this.state.price}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button type="button" onClick={this.handleCancel} className="btn btn-secondary">
              Cancel
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ProductForm;
