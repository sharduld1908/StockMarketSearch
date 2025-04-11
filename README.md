# Stock Market App

This project is a **Stock Market Search Application** that allows users to search for stock ticker symbols and view relevant information. The application is built using a **React + TypeScript** frontend and an **Express.js** backend. It integrates with the [Finnhub API](https://finnhub.io/) to fetch stock market data.

## Project Structure

The project is divided into two main parts:

### 1. Client (Frontend)
The frontend is built using **React**, **TypeScript**, and **Vite**. It provides a user-friendly interface for searching stock ticker symbols.

#### Features:
- **Search Bar**: Users can search for stock ticker symbols.
- **Responsive Design**: The UI is styled using CSS for a clean and responsive layout.
- **Components**:
  - `Navbar`: Displays the application title and navigation links.
  - `SearchBar`: Allows users to input and clear search queries.
  - `SearchContent`: Displays the search bar and a placeholder for search results.
  - `Footer`: Displays a footer with attribution to Finnhub.

#### Directory Structure:
- `src/components`: Contains reusable React components.
- `src/assets`: Stores static assets like images.
- `public`: Contains public files like the favicon.

#### Scripts:
- `dev`: Starts the development server.
- `build`: Builds the production-ready application.
- `lint`: Runs ESLint to check for code quality issues.
- `preview`: Previews the production build.

### 2. Server (Backend)
The backend is built using **Express.js** and acts as a proxy to the Finnhub API.

#### Features:
- **Search Endpoint**: `/search` endpoint to query stock ticker symbols from the Finnhub API.
- **Environment Variables**: Uses `.env` to securely store the Finnhub API key.

#### Directory Structure:
- `src/index.ts`: Main entry point for the server.

#### Scripts:
- `dev`: Starts the server in development mode with hot-reloading.
- `build`: Compiles the TypeScript code to JavaScript.
- `start`: Runs the compiled server.

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd StockMarketApp
   ```

2. Set up the client:
   ```bash
   cd client
   npm install
   ```

3. Set up the server:
   ```bash
   cd ../server
   npm install
   ```

4. Create `.env` files in both `client` and `server` directories:
   - **Client**:
     ```
     FINNHUB_API_KEY=<your_finnhub_api_key>
     ```
   - **Server**:
     ```
     PORT=3000
     FINNHUB_API_KEY=<your_finnhub_api_key>
     ```

5. Start the development servers:
   - **Client**:
     ```bash
     cd client
     npm run dev
     ```
   - **Server**:
     ```bash
     cd ../server
     npm run dev
     ```

6. Open the client in your browser at `http://localhost:5173` (default Vite port).

## Technologies Used

### Frontend:
- React
- TypeScript
- Vite
- CSS

### Backend:
- Express.js
- TypeScript
- Axios
- Dotenv

## Future Enhancements
- Display stock search results in the frontend.
- Add a watchlist and portfolio feature.
- Implement user authentication for personalized features.
- Improve UI/UX with advanced styling and animations.

## License
This project is licensed under the MIT License. See the LICENSE file for details.