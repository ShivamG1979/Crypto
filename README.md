// README.md
# Crypto Price Tracker

A real-time cryptocurrency price tracker built with React, Redux Toolkit, and Bootstrap. This application simulates WebSocket connections to provide live updates of cryptocurrency prices and related data.

DEMO Live- https://crypto-beta-seven.vercel.app/

## Features

- Real-time price updates (simulated WebSocket)
- Responsive UI using Bootstrap
- Complete Redux state management
- Price change indicators (up/down with colors)
- Mini chart visualization
- Formatted market cap and volume data

## Tech Stack

- React.js - UI library
- Redux Toolkit - State management
- Bootstrap - UI framework
- JavaScript (ES6+)



## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/ShivamG1979/Crypto
cd Crypto
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## How It Works

The application initializes with sample cryptocurrency data. A simulated WebSocket service (implemented using `setInterval`) triggers random price updates every 1.5 seconds. These updates are dispatched to the Redux store, which updates the state and triggers UI re-renders when necessary.

Each asset in the table displays:
- Name and symbol with logo
- Current price
- Percentage changes (1h, 24h, 7d)
- Market cap
- 24h volume
- Circulating supply
- 7-day chart (simplified SVG representation)

## Future Improvements

- Integrate with real crypto API (e.g., CoinGecko, Binance)
- Add filtering and sorting options
- Implement search functionality
- Add detailed view for each cryptocurrency
- Add user preferences with localStorage
- Implement unit tests
