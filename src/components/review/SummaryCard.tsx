import React from 'react';

const SummaryCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white">Clause Title</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">This is a summary of the clause.</p>
    </div>
  );
};

export default SummaryCard;
