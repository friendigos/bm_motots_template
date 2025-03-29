'use client'
import { useState } from 'react';

const VehicleScrappingCalculator = () => {
  const [vehicleWeight, setVehicleWeight] = useState('');
  const [scrapValue, setScrapValue] = useState(null);

  const calculateScrapValue = () => {
    const weight = parseFloat(vehicleWeight);
    if (isNaN(weight) || weight <= 0) {
      setScrapValue('Please enter a valid weight');
      return;
    }

    const value = weight * 0.65 * 30;
    setScrapValue(value.toFixed(2));
  };

  return (
    <div className="vehicle-scrap-container">
      <h1>Vehicle Scrap Value Calculator</h1>

      <div className="vehicle-scrap-form-group">
        <label htmlFor="vehicle-weight">Unladen Weight (in kg):</label>
        <input
          type="number"
          id="vehicle-weight"
          value={vehicleWeight}
          onChange={(e) => setVehicleWeight(e.target.value)}
          min="1"
          required
          placeholder="Enter vehicle weight"
        />
      </div>

      <button className="vehicle-scrap-calculate-button" onClick={calculateScrapValue}>
        Get Value
      </button>

      {scrapValue !== null && (
        <div className="vehicle-scrap-result">
          <h3>Estimated Value: ₹{scrapValue}</h3>
        </div>
      )}
    </div>
  );
};

export default VehicleScrappingCalculator;
