import React from 'react';
import OfficeSpace from './OfficeSpace';

const officeData = [
  { name: 'DBS', rent: 50000, address: 'Chennai', img: 'office.jpg' },
  { name: 'Apex', rent: 45000, address: 'Bengaluru', img: 'office.jpg' },
  { name: 'Zenith', rent: 70000, address: 'Mumbai', img: 'office.jpg' }
];

export default function App() {
  return (
    <div className="app-container">
      <h1>Office Space , at Affordable Range</h1>
      <div className="list">
        {officeData.map((o, i) => (
          <OfficeSpace key={i} item={o} />
        ))}
      </div>
    </div>
  );
}
