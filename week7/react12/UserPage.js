
import React from 'react';

function UserPage() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Welcome, Traveler!</h2>
      <p>Book your tickets below:</p>
      <button style={{ padding: '10px 20px', background: 'green', color: 'white', border: 'none', borderRadius: '5px' }}>
        Book Now
      </button>
    </div>
  );
}

export default UserPage;
