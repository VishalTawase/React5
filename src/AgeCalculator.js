import React, { useState } from 'react';

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (birthDate) {
      const birthDateObject = new Date(birthDate);
      const currentDate = new Date();
      const ageInMilliseconds = currentDate - birthDateObject;
      const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
      setAge(ageInYears.toFixed(2));
    } else {
      setAge(null);
    }
  };

  return (
    <div className="age-calculator">
      <h2>Age Calculator</h2>
      <label>Enter your birthdate: </label>
      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p>Your age is: {age} years</p>}
    </div>
  );
}

export default AgeCalculator;
