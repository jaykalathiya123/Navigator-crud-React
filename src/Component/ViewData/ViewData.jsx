


import React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';

const ViewData = ({ handleEdit , setStorage , Storage }) => {
  
  const handleRemove = (id) => {
    const removeData = Storage.filter(item => item.id !== id);
    setStorage(removeData);
  };
  return (
<div className="p-6 bg-gradient-to-br from-indigo-50 to-cyan-100 rounded-xl shadow-xl">
  <table className="min-w-full table-auto border-collapse border border-gray-300 rounded-lg">
    <thead>
      <tr className="bg-indigo-200 text-indigo-700 uppercase text-sm font-semibold leading-normal">
        <th className="px-4 py-3 border border-indigo-300">#</th>
        <th className="px-4 py-3 border border-indigo-300">Name</th>
        <th className="px-4 py-3 border border-indigo-300">Email</th>
        <th className="px-4 py-3 border border-indigo-300">Course</th>
        <th className="px-4 py-3 border border-indigo-300">Message</th>
        <th className="px-4 py-3 border border-indigo-300">Actions</th>
      </tr>
    </thead>
    <tbody>
      {Storage.map((rec, index) => (
        <tr key={index} className="bg-white hover:bg-indigo-100 text-gray-700 text-sm">
          <td className="border px-4 py-2 text-center">{index + 1}</td>
          <td className="border px-4 py-2 text-center">{rec.name}</td>
          <td className="border px-4 py-2 text-center">{rec.email}</td>
          <td className="border px-4 py-2 text-center">{rec.course}</td>
          <td className="border px-4 py-2 text-center">{rec.message}</td>
          <td className="border px-4 py-2 text-center">
            <button
              className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-3 py-1 rounded-lg hover:from-blue-500 hover:to-blue-700 font-medium"
              onClick={() => handleEdit(rec.id)}
            >
              Edit
            </button>
            <button
              className="bg-gradient-to-r from-red-400 to-red-600 text-white px-3 py-1 rounded-lg mx-2 hover:from-red-500 hover:to-red-700 font-medium"
              onClick={() => handleRemove(rec.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
};

export default ViewData;

