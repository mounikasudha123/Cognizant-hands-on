import React from 'react';

export default function OfficeSpace({ item }) {
  const colors = [];
  if (item.rent > 60000) {
    colors.push('textRed');
  } else {
    colors.push('textGreen');
  }

  return (
    <div className="office-card">
      <h2>{item.name}</h2>
      <img src={item.img} alt={item.name} className="office-img" />
      <p className={`rent ${colors.join(' ')}`}>Rent: Rs. {item.rent}</p>
      <p>Address: {item.address}</p>
    </div>
  );
}
