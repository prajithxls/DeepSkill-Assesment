import React from 'react';

function OfficeSpace() {
  const office = {
    name: "WeWork Residency",
    rent: 75000,
    address: "MG Road, Bengaluru",
    image: "https://via.placeholder.com/300x200?text=Office+Space"
  };

  const officeList = [
    { name: "Regus Tower", rent: 55000, address: "Indiranagar" },
    { name: "91Springboard", rent: 65000, address: "Koramangala" },
    { name: "Awfis Space", rent: 48000, address: "HSR Layout" },
    { name: "CoWrks Prestige", rent: 90000, address: "Whitefield" }
  ];

  const getRentStyle = (rent) => {
    return {
      color: rent < 60000 ? 'red' : 'green',
      fontWeight: 'bold'
    };
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {/* JSX element heading */}
      <h1>Office Space Rental App</h1>

      {/* JSX image attribute */}
      <img src={office.image} alt="Office" style={{ width: '300px', height: '200px', borderRadius: '10px' }} />

      {/* Single Office Details */}
      <h2>{office.name}</h2>
      <p><strong>Rent:</strong> <span style={getRentStyle(office.rent)}>₹{office.rent}</span></p>
      <p><strong>Address:</strong> {office.address}</p>

      <hr />

      {/* List of Offices */}
      <h2>Available Spaces</h2>
      {officeList.map((item, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '8px' }}>
          <p><strong>Name:</strong> {item.name}</p>
          <p><strong>Rent:</strong> <span style={getRentStyle(item.rent)}>₹{item.rent}</span></p>
          <p><strong>Address:</strong> {item.address}</p>
        </div>
      ))}
    </div>
  );
}

export default OfficeSpace;
