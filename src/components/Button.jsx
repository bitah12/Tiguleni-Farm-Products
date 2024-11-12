import { useState } from 'react';

const InlineRadioSelection = () => {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div className="flex items-center space-x-6">
      <label className="flex items-center space-x-2 cursor-pointer">
        <input
          type="radio"
          name="option"
          value="male"
          checked={selectedOption === 'male'}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
        />
        <span className="text-gray-700">Male</span>
      </label>
      
      <label className="flex items-center space-x-2 cursor-pointer">
        <input
          type="radio"
          name="option"
          value="female"
          checked={selectedOption === 'female'}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
        />
        <span className="text-gray-700">Female</span>
      </label>
    </div>
  );
};

export default InlineRadioSelection;