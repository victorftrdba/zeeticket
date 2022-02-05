import React from "react";
import "../styles/creator.scss";

class Creator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", description: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    alert("Um nome foi enviado: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <div>
            <p>TÍTULO:</p>
          </div>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <div>
            <p>DESCRIÇÃO:</p>
          </div>
          <input
            type="text"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}
export default Creator;
