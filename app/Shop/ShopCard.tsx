import React from 'react';
import hardwareData from '../Shop/Hardware.json'; // Assuming the file is named "Hardware.json"

function ShopCard({ product }) {
  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow-md overflow-hidden mx-4 mt-4">
      <div className="px-6 py-4">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-gray-700 text-sm mb-2">By: {product.brand}</p> {/* Corrected to display brand */}
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-sm">Description: {product.description}</p>
      </div>
      <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
        <span className="text-gray-700 text-sm">
          Rating: {product.rating} | Price: ${product.price} {/* Added currency symbol for price */}
        </span>
      </div>
    </div>
  );
}

function ShopList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {hardwareData.products.map((product) => (
        <ShopCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ShopList;
