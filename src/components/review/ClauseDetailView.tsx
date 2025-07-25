import React from 'react';

const ClauseDetailView = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Detailed Clause View</h2>
      <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
        This is the full text of the clause, providing all the necessary details and context.
      </p>
      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">Accept</button>
        <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Reject</button>
      </div>
    </div>
  );
};

export default ClauseDetailView;
