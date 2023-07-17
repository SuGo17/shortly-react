import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <a className="logo" href="/">
          Shortly
        </a>
        <div className="nav-container">
          <ul className="nav-1 footer-nav">
            <li className="title">Features</li>
            <li>
              <a href="/" className="nav-link">
                Link Shortening
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                Branded Links
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                Analytics
              </a>
            </li>
          </ul>
          <ul className="nav-2 footer-nav">
            <li className="title">Resources</li>
            <li>
              <a href="/" className="nav-link">
                Blog
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                Developers
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                Support
              </a>
            </li>
          </ul>
          <ul className="nav-3 footer-nav">
            <li className="title">Company</li>
            <li>
              <a href="/" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                Our Team
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                Careers
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
          <ul className="nav-4 footer-nav">
            <li>
              <a href="/" className="nav-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                <ion-icon name="logo-pinterest"></ion-icon>
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
