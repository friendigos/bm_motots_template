'use client'
import { useState } from 'react';

const VehicleScrappingCalculator = () => {
  const [vehicleType, setVehicleType] = useState('car');
  const [vehicleAge, setVehicleAge] = useState('');
  const [vehicleCondition, setVehicleCondition] = useState('good');
  const [scrapValue, setScrapValue] = useState(null);

  const calculateScrapValue = () => {
    let baseValue = 0;

    switch (vehicleType) {
      case 'car':
        baseValue = 5000; 
        break;
      case 'bike':
        baseValue = 2000;
        break;
      case 'truck':
        baseValue = 10000;
        break;
      default:
        baseValue = 0;
    }

    if (vehicleAge > 10) {
      baseValue -= 1000; 
    }

    switch (vehicleCondition) {
      case 'good':
        baseValue += 2000; 
        break;
      case 'average':
        baseValue += 1000;
        break;
      case 'poor':
        baseValue -= 1000;
        break;
      default:
        break;
    }

    setScrapValue(baseValue);
  };

  return (
    <div className="vehicle-scrap-container">
      <h1>Vehicle Scrapping Calculator</h1>

      <div className="vehicle-scrap-form-group">
        <label htmlFor="vehicle-type">Vehicle Type:</label>
        <select
          id="vehicle-type"
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
        >
          <option value="car">Car</option>
          <option value="bike">Bike</option>
          <option value="truck">Truck</option>
        </select>
      </div>

      <div className="vehicle-scrap-form-group">
        <label htmlFor="vehicle-age">Vehicle Age (in years):</label>
        <input
          type="number"
          id="vehicle-age"
          value={vehicleAge}
          onChange={(e) => setVehicleAge(e.target.value)}
          min="1"
          max="50"
          required
        />
      </div>

      <div className="vehicle-scrap-form-group">
        <label htmlFor="vehicle-condition">Condition of Vehicle:</label>
        <select
          id="vehicle-condition"
          value={vehicleCondition}
          onChange={(e) => setVehicleCondition(e.target.value)}
        >
          <option value="good">Good</option>
          <option value="average">Average</option>
          <option value="poor">Poor</option>
        </select>
      </div>

      <button className="vehicle-scrap-calculate-button" onClick={calculateScrapValue}>
        Calculate Scrap Value
      </button>

      {scrapValue !== null && (
        <div className="vehicle-scrap-result">
          <h3>Estimated Scrap Value: ₹{scrapValue}</h3>
        </div>
      )}
    </div>
  );
};

export default VehicleScrappingCalculator;
