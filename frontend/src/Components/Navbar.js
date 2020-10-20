import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
      <nav class="navbar navbar-dark bg-dark">
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
          <Link to="/">
            <h1 class="navbar-brand">KiviZon</h1>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup"></div>
        </nav>
      </nav>
    );
};

export default Navbar;