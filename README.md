# Maga.Mic

## About Maga.Mic

Welcome to Maga.Mic!

This project is a React-developed website dedicated to offering you a unique experience in the powerful world of tarot and astrology. Here you will find a wide range of products and services designed to help you explore your spiritual path, unlock your potential, and find balance in your life.

Our goal at Maga.Mic is to provide you with powerful tools so that you can connect with your intuition, understand the mysteries of the universe, and discover your life purpose. Whether you're looking for a personalized tarot reading, a detailed astrological guide, or resources to deepen your personal growth, you're in the right place.

We are committed to providing you with quality services and support at every step of your journey. Every product and service on our website has been carefully selected to make sure you find it the best of the best.

In addition to our product and service offerings, we also offer informative and educational content on our blog, where you will find articles on tarot, astrology, spirituality, and self-discovery. We want to share knowledge and foster an enriching dialogue so that you can expand your wisdom and find answers to your deepest questions.

At Maga.Mic, we believe in the importance of authenticity and integrity in everything we do. We are committed to providing you with a trustworthy and satisfying experience, where you feel supported and empowered on your spiritual journey.

Thank you for joining our community. We are excited to accompany you on your path to self-discovery and personal growth!

Warm greetings from Maga.Mic Team

## Technologies implemented

The technologies used in the code include:

- React – Code is written using the React library, which is a popular JavaScript library for creating user interfaces.

- React Router – The code uses the React Router to handle routing and navigation within the app. It allows the creation of multiple paths and renders different components based on the current URL.

- Firebase – The code integrates Firebase, a platform as a service back-end, to manage the functionality of the database. It uses Firebase's Firestore, a NoSQL cloud database, to store and retrieve data.

- CSS – The code uses CSS to style the components and provide visual formatting.

Summing up, the project utilizes React and React Router for front-end development, Firebase Firestore for data management, and CSS for styling purposes.

## Functionalities

This dynamic website offers the following functionalities:

- Navigation: the website includes a navigation bar (NavBar) with links to different categories, namely, Astrology, DiceAndRunes, Events, Products, Workshops and Tarot. By clicking on these links, users can search for products related to each category.

- Routing: the website uses the React Router (BrowserRouter, Routes, Route) to handle routing and display different components based on the URL. There are paths defined for the home page ('/'), category pages (/category/:idCategory => Astrology, DiceAndRunes, etc.), item detail pages (/item/:idItem => by product), shopping cart (/cart), and checkout page (/checkout).

- Product Listing: the ItemListContainer component is responsible for getting and displaying a list of products based on the selected category. Retrieves product data from a Firestore database and presents the ItemList component to display the products.

- Product Details – the ItemDetailContainer component gets details of a specific product based on the idItem parameter of the URL. Retrieves product data from Firestore and renders the ItemDetail component to display product details.

- Shopping Cart: the website includes a shopping cart feature implemented in the Cart component. The Cart component is rendered when the user visits the /cart path. The Cart component is managed by the CartContext provided by the CartProvider component. It allows users to add products to the cart, remove products, and view the total quantity and price of items in the cart.

- Checkout: the website provides a payment page (Checkout) where users can proceed to finalize their purchase.

All these functionalities allows users to browse and purchase products and services related to tarot, astrology, spirituality, and self-discovery.

## Install from Github and modify the project

1. Clone the repository

- Open your terminal or command prompt.
- Navigate to the directory where you want to store the website files.
- Run the following command to clone the repository: git clone https://github.com/lucianobizin/maga.mic.git

2. Install dependencies

Make sure you have Node.js and npm (Node Package Manager) installed on your machine or install them.
In case yo don't have all dependencies needed to run this project, proceed this way:
- Run the following command to install the dependencies:
- install npm (this command will download and install all the required packages specified in the package.json file)

3. Configure firebase

The website uses Firebase for the Firestore backend and database. You will need to set up a Firebase project and configure the project credentials.
- Visit the Firebase website (https://firebase.google.com/)
- Create a new project and get the details of your Firebase configuration, including API key, authDomain, projectId, etc.
- Go to your project and create a file called config.js in the src/service directory.
- Inside config.js, export the Firebase configuration as an object using the details obtained. 
For example:

export const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      Project ID: "YOUR_PROJECT_ID",
      // Add more configuration properties
};

4. Run development server

Once the dependencies are installed and Firebase is configured, you can start the development server and run the website locally.
- Run the following command to start the development server: npm start.
- The website will be served at http://localhost:3000.
- Open your web browser and visit http://localhost:3000 to see the website in action.

5. Website Modification

Now that the website is up and running, you can make modifications to suit your needs.
The main code files are located in the src directory. You can modify the components, styles and functionality according to your needs.
The website uses React components, so you can browse the component files in the src/components directory and make any necessary changes.

6. Creation of the deployment version.

Once you have made the desired modifications, you can create the production or deployment version of the website.
- In the terminal, run the following command: npm run build (create a minimized and optimized production build of the website in the build directory).
- After creating the production version, you can deploy the website on a hosting service of your choice.
- Upload the contents of the build directory to your hosting server.
- Follow the hosting service's instructions to make the website publicly accessible.

