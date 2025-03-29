"use client";
import React, { useState } from "react";
import axios from "axios";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function Page() {
  const [barcode, setBarcode] = useState("");
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Function to handle search for product details by barcode
  async function searchBarcode() {
    if (!barcode) {
      setError("Please enter a barcode");
      return;
    }
    setLoading(true);
    setError("");
    try {
      // Sending a GET request with the barcode as part of the URL
      const response = await axios.get(
        `http://localhost:5000/api/products/scan/${barcode}`
      );
      // Save product details in the state
      setProductDetails(response.data);
    } catch (err) {
      setError("Error fetching product details");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 flex justify-center items-center py-26">
        <div className="max-w-7xl w-full flex flex-col sm:flex-row min-h-[700px]  space-x-4">
          {/* Left Side: Barcode Input */}
          <div className="w-full sm:w-1/3 bg-white p-6 border-r border-gray-200">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
              Product Search
            </h2>
            <div className="mb-6">
              <label
                htmlFor="barcode"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Enter Barcode:
              </label>
              <input
                type="text"
                id="barcode"
                value={barcode}
                onChange={(e) => setBarcode(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter barcode number"
              />
            </div>
            <button
              onClick={searchBarcode}
              className="w-full py-3 bg-green-500 text-white text-lg font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              disabled={loading}
            >
              {loading ? "Loading..." : "Get Details"}
            </button>
          </div>

          {/* Right Side: Product Details */}
          {productDetails && !loading ? (
            <div className="flex-1 p-8 bg-gray-50">
              <div className="flex flex-col items-start space-y-6">
                {/* Image */}
                {productDetails.image ? (
                  <img
                    src={productDetails.image}
                    alt={productDetails.name}
                    className="w-32 h-32 object-cover rounded-md"
                  />
                ) : (
                  <div className="w-32 h-32 bg-gray-300 rounded-md animate-pulse"></div>
                )}

                {/* Product Name */}
                <h3 className="text-3xl font-semibold text-gray-800">
                  {productDetails.name}
                </h3>

                {/* Ingredients */}
                <div className="space-y-2">
                  <p>
                    <strong className="text-lg text-gray-700">
                      Ingredients:
                    </strong>{" "}
                    {productDetails.ingredients}
                  </p>
                  <p>
                    <strong className="text-lg text-gray-700">
                      Allergens:
                    </strong>{" "}
                    {productDetails.allergicItems}
                  </p>
                  <p>
                    <strong className="text-lg text-gray-700">
                      Health-causing Ingredients:
                    </strong>{" "}
                    {productDetails.healthCausingIngredients}
                  </p>
                  <p>
                    <strong className="text-lg text-gray-700">
                      Classifications of Ingredients:
                    </strong>{" "}
                    {productDetails.classifications}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 p-8 bg-gray-50">
              {/* Skeleton Loader for Product Details */}
              <div className="space-y-4">
                <div className="w-32 h-32 bg-gray-300 rounded-md animate-pulse"></div>
                <div className="w-1/2 h-8 bg-gray-300 rounded-md animate-pulse"></div>
                <div className="w-3/4 h-6 bg-gray-300 rounded-md animate-pulse"></div>
                <div className="w-3/4 h-6 bg-gray-300 rounded-md animate-pulse"></div>
                <div className="w-3/4 h-6 bg-gray-300 rounded-md animate-pulse"></div>
                <div className="w-3/4 h-6 bg-gray-300 rounded-md animate-pulse"></div>
              </div>
            </div>
          )}
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
      <Footer />
    </>
  );
}
