import React, { Component } from 'react';

class Header extends Component {


  render() {

    return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div className="container">
        <a className="navbar-brand" href="index.html">Bible <span>exchange</span></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="oi oi-menu"></span> Menu
        </button>

        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>

            <li className="nav-item"><a href="discover.html" className="nav-link">Discover</a></li>
            <li className="nav-item"><a href="share.html" className="nav-link">Share</a></li>
         {/* <!-- <li className="nav-item cta mr-md-2"><a href="#" className="nav-link">Buy ticket</a></li>--> */}
          </ul>
        </div>
      </div>
    </nav>
    );
  }


}

export default Header;

