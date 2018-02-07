import React, { Component } from 'react';

class Dinner extends Component {
  render() {
    return (
      <div className="Dinner">
        <h1>Dinner</h1>
        <p>Details about the dinner</p>
        <form>
          <label for="name" aria-label="Name Input">
            <input id="name" type="text" placeholder="name" aria-required="true"></input>
          </label>
          <label for="number" aria-label="Number Input">
            <input id="number" type="text" placeholder="number in party" aria-required="true">
            </input>
          </label>
          <label for="email" aria-label="Email Input">
            <input id="email" type="text" placeholder="email" aria-required="true">
            </input>
          </label>
          <label for="credit" aria-label="Credit Card Input">
            <input id="credit" type="text" placeholder="credit card number" aria-required="true">
            </input>
          </label>
          <label for="submit" aria-label="Submit Form">
            <button id="submit" type="submit" value="submit" aria-required="true">
              Submit
            </button>
          </label>
        </form>
      </div>
    );
  }
}

export default Dinner;
