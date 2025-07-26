import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore 
        name="Prajith" 
        school="Bell Matric Hr.Sec School" 
        total={510} 
        goal={6} 
      />
    </div>
  );
}

export default App;
