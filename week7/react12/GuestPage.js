
import React from 'react';

function GuestPage() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Welcome, Guest!</h2>
      <p>Here are some flight details:</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>✈️ Flight AI-101 | Delhi → Mumbai | ₹5500</li>
        <li>✈️ Flight 6E-202 | Bengaluru → Chennai | ₹3200</li>
        <li>✈️ Flight SG-303 | Kolkata → Hyderabad | ₹4800</li>
      </ul>
      <p>Login to book your tickets.</p>
    </div>
  );
}

export default GuestPage;
