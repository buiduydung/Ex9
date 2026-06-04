import { Component } from "react";

class SimpleWebsite extends Component {
  render() {
    return (
      <div className="website">
        <header className="websiteHeader">
          <div className="logoBox">
            <h1>FPT UNIVERSITY</h1>
          </div>

          <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </header>

        <main className="websiteMain">
          <section>
            <h2>About</h2>
            <p>This is the about section of the website.</p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>For any inquiries, please contact us at example@example.com.</p>
          </section>
        </main>

        <footer className="websiteFooter">
          <p>© 2026 Website. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}

export default SimpleWebsite;
