# Online Shop Application

This is an online shop application that allows users to browse products, search for products by name, filter products based on price, add products to a cart, and view the cart summary.

## Features

1. **Login Process**: Implemented a login process using the [DummyJSON Authentication API](https://dummyjson.com/docs/auth). Upon successful login, a token is saved for authorization purposes.

2. **Protected Home Page**: The home page is a protected route, meaning only logged-in users are allowed to access it.

3. **Product Fetching**: Products are fetched from the [DummyJSON Products API](https://dummyjson.com/docs/products) and displayed on the home page.

4. **Search Functionality**: Implemented a search feature allowing users to search for products based on their name.

5. **Price Filter**: Added a filter option on the home page to filter products based on price.

6. **Cart**: Implemented a cart functionality where users can add products to the cart. The cart count and total amount are displayed on the top of the page.

7. **Add to Cart Button**: Each product card has an "Add to Cart" button allowing users to easily add products to their cart.

## Technologies Used

- React.js: Frontend library for building user interfaces
- React Router: For routing and navigation within the application
- Fetch API: For making HTTP requests to fetch products and authenticate users
- HTML/CSS: For styling and structuring the user interface

## Installation

### Clone the Repository
```
git clone https://github.com/Tarunvetsa/Build_with_innovations_assignment
```

### Navigate to project Directory
```
cd shopping
```

### Install Dependencies
```
npm install
```

### Run the Application 
```
npm run dev
```
> Then, the development server will be running on yourlocalhost at `http://<localhost>:<portnumber>`
