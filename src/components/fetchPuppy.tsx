"use client";

import { useState, useEffect } from "react";

export default function Puppy() {
  const [puppyImage, setPuppyImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchPuppy = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await res.json();
      setPuppyImage(data.message);
    } catch (error) {
      console.error("Error fetching puppy:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPuppy(); // Load initial puppy
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">🐶 Random Puppy</h2>

      {loading ? (
        <p className="text-lg text-gray-600">Loading...</p>
      ) : (
        puppyImage && <img src={puppyImage} alt="Random Puppy" className="w-80 h-80 rounded-md shadow-md" />
      )}

      <button
        onClick={fetchPuppy}
        className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition"
      >
        Get New Puppy
      </button>
    </div>
  );
}
