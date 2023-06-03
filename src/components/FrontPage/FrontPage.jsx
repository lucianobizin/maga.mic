import React from "react";
import ReactDOM from "react-dom";

// Component for the front page
const FrontPage = () => {
  const goToMarket = () => {
    // Redirect the user to the market page
    window.location.href = "/market";
  };

  return (
    <div>
      <header>
        <h1>Welcome to My Innovative Website</h1>
      </header>
      <section>
        <img
          src="https://example.com/image.jpg"
          alt="Product Image"
          width="300"
          height="200"
        />
        <button onClick={goToMarket}>Go to Market</button>
      </section>
      <footer>
        <p>&copy; 2023 My Innovative Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Render the front page component
ReactDOM.render(<FrontPage />, document.getElementById("root"));