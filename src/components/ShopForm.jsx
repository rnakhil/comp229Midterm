import React, { Component } from "react";
import { Button, Container, TextField, Typography, Box } from "@mui/material";

const submitButtonStyle = {
  backgroundColor: "#888888", // Grey color
  marginRight: "8px", // Horizontal spacing between buttons
};

const cancelButtonStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.9)", // Off-white color
  color: "#333", // Dark text color
};


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
    console.log("Shop Details Added:", this.state);
  };

  handleCancel = () => {
    this.setState({
      name: "",
      description: "",
    });
  };

  render() {
    return (
      <Container maxWidth="sm">
        <form onSubmit={this.handleSubmit}>
          <Typography variant="h4" gutterBottom>
            New Shop
          </Typography>
          <TextField
            id="standard-basic"
            label="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            fullWidth
            variant="standard"
          />
          <TextField
            id="standard-basic"
            label="Description"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            fullWidth
            variant="standard"
          />
          <Box mt={2}> {/* Spacing between buttons */}
            <Button
              type="submit"
              variant="contained"
              style={submitButtonStyle}
              color="primary"
            >
              Submit
            </Button>
            <Button
              onClick={this.handleCancel}
              to="/"
              variant="contained"
              style={cancelButtonStyle}
              color="secondary"
            >
              Cancel
            </Button>
          </Box>
        </form>
      </Container>
    );
  }
}

export default ShopForm;
