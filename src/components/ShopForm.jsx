import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';


class ShopForm extends Component {
  state = {
    name: "",
    description: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Shop Added :", "name:", this.state.name, "description:", this.state.description );
  };

  handleCancel = () => {
    this.setState({
      name: "",
      description: "",
    });
  };

  render() {
    return (
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div className="col-md-6">
          <form onSubmit={this.handleSubmit}>
            <h2>New Shop</h2>
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

export default ShopForm;
