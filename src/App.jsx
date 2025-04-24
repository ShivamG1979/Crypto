// src/App.jsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CryptoTable from './components/CryptoTable';
import CryptoWebSocketService from './services/cryptoWebSocket';
import { store } from './app/store';
import './App.css';

const webSocketService = new CryptoWebSocketService(store);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Start the WebSocket connection when the component mounts
    webSocketService.connect();

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      webSocketService.disconnect();
    };
  }, [dispatch]);

  return (
    <div className="container-fluid py-4">
      <header className="mb-4">
        <h1 className="text-center mb-4">Real-Time Crypto Tracker</h1>
        <p className="text-center text-muted">
          Live cryptocurrency prices with simulated WebSocket updates every 1.5 seconds
        </p>
      </header>
      
      <main>
        <CryptoTable />
      </main>

      <footer className="mt-5 text-center text-muted">
        <p>
          <small>
            Data refreshes automatically. This is a simulated live feed using Redux and interval updates.
          </small>
        </p>
      </footer>
    </div>
  );
}

export default App;
