import React from 'react';

const AddProperty = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add New Property</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Property Name" className="w-full p-2 border" />
        <input type="text" placeholder="Location" className="w-full p-2 border" />
        <input type="number" placeholder="Price" className="w-full p-2 border" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Property</button>
      </form>
    </div>
  );
};

export default AddProperty;