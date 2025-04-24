// src/services/cryptoWebSocket.js
import { updatePrice } from '../features/crypto/cryptoSlice';

class CryptoWebSocketService {
  constructor(store) {
    this.store = store;
    this.interval = null;
  }

  connect() {
    // Simulate WebSocket connection using setInterval
    this.interval = setInterval(() => {
      this.simulatePriceUpdates();
    }, 1500); // Update every 1.5 seconds
  }

  simulatePriceUpdates() {
    const assets = this.store.getState().crypto.assets;
    
    // Randomly select one or more assets to update
    const assetIdsToUpdate = Array.from(
      { length: Math.ceil(Math.random() * assets.length) },
      () => Math.floor(Math.random() * assets.length) + 1
    );

    // Update each selected asset
    assetIdsToUpdate.forEach(id => {
      const asset = assets.find(a => a.id === id);
      if (asset) {
        // Generate random price change within ±2%
        const priceChangePct = (Math.random() * 4 - 2) / 100;
        const newPrice = asset.price * (1 + priceChangePct);
        
        // Update percentage changes
        const change1h = this.getRandomChange(asset.change1h, 0.2);
        const change24h = this.getRandomChange(asset.change24h, 0.3);
        const change7d = this.getRandomChange(asset.change7d, 0.1);
        
        // Update volume (±5%)
        const volumeChange = (Math.random() * 10 - 5) / 100;
        const newVolume = asset.volume24h * (1 + volumeChange);

        this.store.dispatch(
          updatePrice({
            id,
            price: Number(newPrice.toFixed(2)),
            change1h,
            change24h,
            change7d,
            volume24h: Number(newVolume.toFixed(0))
          })
        );
      }
    });
  }

  getRandomChange(currentChange, maxDelta) {
    // Generate a random delta within the range of ±maxDelta
    const delta = (Math.random() * 2 * maxDelta) - maxDelta;
    return Number((currentChange + delta).toFixed(2));
  }

  disconnect() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
}

export default CryptoWebSocketService;