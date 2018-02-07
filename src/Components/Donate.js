import React, { Component } from 'react';

class Donate extends Component {
  render() {
    return (
      <div className="Donate">
        <h1>Donate</h1>
        <p>Info about where your money will go</p>
        <form>
          <label for="name" aria-label="Name Input">
            <input id="name" type="text" placeholder="name" aria-required="true"></input>
          </label>
          <label for="email" aria-label="Email Input">
            <input id="email" type="text" placeholder="email" aria-required="true">
            </input>
          </label>
          <label for="credit" aria-label="Credit Card Input">
            <input id="credit" type="text" placeholder="credit card number" aria-required="true">
            </input>
          </label>
          <label for="amount" aria-label="Amount Input">
            <input id="amount" type="text" placeholder="donation amount" aria-required="true">
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

export default Donate;
