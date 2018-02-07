import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="home-header">
          <nav className="nav">
          <h1 className="brand-logo">Dress The Child</h1>
            <h3>Support Us</h3>
            <h3>Annual Dinner</h3>
            <h3>Shopping Events</h3>
            <button>Donate</button>
          </nav>
        </header>

        <section class="home-section">
          <h3>Mission Statement</h3>
          <p>Puppy kitty ipsum dolor sit good dog foot stick canary. Teeth Mittens grooming vaccine walk swimming nest good boy furry tongue heel furry treats fish.</p>
        </section>

        <section className="home-section mission-section">
          <article className="text-section">
            <h2>What We Do</h2>
            <p>
              Cage run fast kitten dinnertime ball run foot park fleas throw house train licks stick dinnertime window. Yawn litter fish yawn toy pet gate throw Buddy kitty wag tail ball groom crate ferret heel wet nose Rover toys pet supplies. Bird Food treats tongue lick teeth ferret litter box slobbery litter box crate bird small animals yawn small animals shake slobber gimme five toys polydactyl meow. Turtle cage lazy cat foot lazy cat groom canary window tooth brush bedding lazy cat pet supplies turtle water dog shake pet supplies kitty. Walk bird harness wet nose meow harness grooming water dog lol catz water bedding toys bird seed fetch lazy cat. Parakeet scratcher brush biscuit lick dog tooth walk food lazy cat biscuit. Cockatiel Snowball kitten Rover ferret puppy.
            </p>
          </article>
          <img
            id="what-we-do-img"
            src="../assets/kids-photo.jpeg"
            alt="Happy Kids">
          </img>
        </section>

        <section className="home-section">
          <h2>How You can Help</h2>
          <article className="help-option">
            <h4 className="help-title">Volunteer</h4>
            <p className="help-text">Play Dead sit nap lazy dog wet nose Tigger run fast fish lazy cat wagging hamster toy field yawn feathers ferret yawn aquarium.</p>
          </article>
          <article className="help-option">
            <h4 className="help-title">Donate</h4>
            <p className="help-text">Play Dead sit nap lazy dog wet nose Tigger run fast fish lazy cat wagging hamster toy field yawn feathers ferret yawn aquarium.</p>
          </article>
          <article className="help-option">
            <h4 className="help-title">Come to our Annual Dinner</h4>
            <p className="help-text">Play Dead sit nap lazy dog wet nose Tigger run fast fish lazy cat wagging hamster toy field yawn feathers ferret yawn aquarium.</p>
          </article>
        </section>

        <section className="home-section">
          <h2>Help us Dress Kids..</h2>
          <button>Donate Now</button>
        </section>

        <section className="home-section">
          <h2>Our Partners</h2>
          <section className="partner-card-container">
          <article className="partner-card">
            <h4>Target</h4>
            <p>Pet Food pet supplies gimme five puppy cage food feathers food heel feathers running pet gate walk lazy dog Spike. Good Boy park lazy dog walk kibble Scooby snacks licks canary. Maine Coon Cat walk catch water dog slobber chew scratcher ID tag litter tuxedo dog house lazy cat park.</p>
          </article>
          <article className="partner-card">
            <h4>Kohl's</h4>
            <p>Pet Food pet supplies gimme five puppy cage food feathers food heel feathers running pet gate walk lazy dog Spike. Good Boy park lazy dog walk kibble Scooby snacks licks canary. Maine Coon Cat walk catch water dog slobber chew scratcher ID tag litter tuxedo dog house lazy cat park.</p>
          </article>
          <article className="partner-card">
            <h4>Anoterh Store</h4>
            <p>Pet Food pet supplies gimme five puppy cage food feathers food heel feathers running pet gate walk lazy dog Spike. Good Boy park lazy dog walk kibble Scooby snacks licks canary. Maine Coon Cat walk catch water dog slobber chew scratcher ID tag litter tuxedo dog house lazy cat park.</p>
          </article>
          </section>
        </section>

        <section className="home-section">
          <p>Sign up for our newsletter to stay up to date</p>
          <form>
            <label for="newsletter-sign-up" aria-required="true">
              <input id="newsletter-sign-up" type="email" placeholder="email address"></input>
              <button>Submit</button>
            </label>
          </form>
        </section>

        <section className="home-section dinner-section">
          <img
            id="what-we-do-img"
            src="../assets/kids-photo.jpeg"
            alt="Happy Kids">
          </img>
          <article className="text-section">
            <h2>Annual Dinner</h2>
            <p> Dinnertime fetch throw feathers fleas tongue lazy cat lick throw kitten parrot hamster wag tail aquarium chew heel good boy lick feathers cockatiel. Wet Nose food ferret vaccine finch vaccination Scooby snacks string wagging barky tail head good boy pet gate meow good boy. Commands shake bird biscuit left paw finch bark ferret bark gimme five turtle fur canary. Water puppy dog lick kisses pet supplies slobber cat bird seed. Food sit biscuit groom tongue cage.</p>
            </article>
        </section>

        <footer>
          <p>Contact</p>
        </footer>
      </div>
    );
  }
}

export default App;
