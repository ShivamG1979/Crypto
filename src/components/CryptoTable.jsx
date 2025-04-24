// src/components/CryptoTable.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllAssets } from '../features/crypto/cryptoSlice';
import PriceChange from './PriceChange';
import MiniChart from './MiniChart';

const CryptoTable = () => {
  const assets = useSelector(selectAllAssets);
  const [imageErrors, setImageErrors] = useState({});

  const formatMarketCap = (value) => {
    if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
    if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
    if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
    return `$${value.toLocaleString()}`;
  };

  const formatSupply = (value, symbol) => {
    return `${value.toFixed(2)}M ${symbol}`;
  };

  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  // Fallback for if the image doesn't load
  const getFallbackLogo = (symbol) => {
    return (
      <div className="crypto-icon-fallback">
        {symbol.charAt(0)}
      </div>
    );
  };

  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead className="bg-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">1h %</th>
            <th scope="col">24h %</th>
            <th scope="col">7d %</th>
            <th scope="col">Market Cap</th>
            <th scope="col">Volume(24h)</th>
            <th scope="col">Circulating Supply</th>
            <th scope="col">Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => (
            <tr key={asset.id}>
              <td>{asset.id}</td>
              <td>
                <div className="d-flex align-items-center">
                  {!imageErrors[asset.id] ? (
                    <img 
                      src={asset.logoUrl} 
                      alt={asset.name} 
                      className="crypto-logo me-2" 
                      width="24" 
                      height="24"
                      onError={() => handleImageError(asset.id)}
                    />
                  ) : (
                    getFallbackLogo(asset.symbol)
                  )}
                  <span className="fw-bold">{asset.name}</span>
                  <span className="text-muted ms-2">{asset.symbol}</span>
                </div>
              </td>
              <td className="fw-bold">${asset.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
              <td><PriceChange value={asset.change1h} /></td>
              <td><PriceChange value={asset.change24h} /></td>
              <td><PriceChange value={asset.change7d} /></td>
              <td>{formatMarketCap(asset.marketCap)}</td>
              <td>{formatMarketCap(asset.volume24h)}</td>
              <td>{formatSupply(asset.circulatingSupply, asset.symbol)}</td>
              <td>
                <MiniChart symbol={asset.symbol} change7d={asset.change7d} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;