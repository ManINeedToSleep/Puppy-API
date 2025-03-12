"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Puppy() {
  const [puppyImage, setPuppyImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [breed, setBreed] = useState<string>("");
  const [fetchCount, setFetchCount] = useState<number>(0);

  const fetchPuppy = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await res.json();
      setPuppyImage(data.message);
      setFetchCount(prev => prev + 1);
      
      // Extract breed name from URL
      const breedFromUrl = data.message.split("/breeds/")[1].split("/")[0];
      setBreed(breedFromUrl.replace('-', ' '));
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
    <div className="flex flex-col items-center justify-center p-8 bg-white shadow-xl rounded-lg max-w-md mx-auto border border-amber-100 hover:shadow-2xl transition-all duration-300">
      {/* Top decorative elements */}
      <div className="absolute -top-3 -right-3 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
        Woof!
      </div>
      <div className="absolute -top-2 -left-2 w-8 h-8 bg-amber-300 rounded-full flex items-center justify-center">
        🦴
      </div>
      
      <h2 className="text-2xl font-bold text-amber-500 mb-4 flex items-center">
        <span className="mr-2">🐶</span>
        <span className="relative">
          The Doge House
          <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-amber-300 to-amber-500 rounded-full"></span>
        </span>
      </h2>

      <div className="w-full bg-gradient-to-br from-white to-amber-50 p-6 rounded-lg shadow-md border border-amber-100 relative">
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-300 rounded-tl-lg"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-300 rounded-tr-lg"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-amber-300 rounded-bl-lg"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-300 rounded-br-lg"></div>

        {loading ? (
          <div className="flex flex-col justify-center items-center h-80 relative">
            <div className="animate-bounce text-5xl mb-2">🐾</div>
            <div className="text-amber-500 font-medium">Fetching a cute doggo...</div>
            <div className="mt-4 w-48 h-2 bg-amber-100 rounded-full overflow-hidden">
              <div className="h-full bg-amber-400 animate-pulse"></div>
            </div>
          </div>
        ) : (
          puppyImage && (
            <div className="flex flex-col items-center">
              <div className="relative w-80 h-80 mb-4 overflow-hidden rounded-lg shadow-md transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group">
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <Image 
                  src={puppyImage}
                  alt={`A cute ${breed || 'puppy'}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover"
                  priority={false}
                  quality={85}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-amber-500/80 text-white p-2 transform translate-y-full group-hover:translate-y-0 transition-transform">
                  <p className="text-sm font-medium">Click button below for a new cute doggo!</p>
                </div>
              </div>
              
              <div className="bg-amber-50 p-3 rounded-lg border border-amber-200 shadow-sm w-full mb-4">
                {breed && (
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-amber-600">•</span>
                    <p className="text-lg font-medium text-amber-800 capitalize">
                      {breed}
                    </p>
                    <span className="text-amber-600">•</span>
                  </div>
                )}
                <div className="text-xs text-amber-500 mt-1">Doggo #{fetchCount}</div>
              </div>
            </div>
          )
        )}

        <button
          onClick={fetchPuppy}
          disabled={loading}
          className="mt-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-md shadow-md hover:from-amber-600 hover:to-amber-700 transition-all duration-300 w-full flex items-center justify-center gap-2 relative overflow-hidden group"
        >
          <span className="relative z-10">{loading ? "Fetching..." : "Get New Doge"}</span>
          <span className="relative z-10">{loading ? "🔍" : "🐕"}</span>
          
          {/* Button animation */}
          <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
        </button>
      </div>
      
      {/* Paw counter at the bottom */}
      <div className="mt-4 text-xs text-amber-600 flex items-center gap-1">
        <span>You've fetched {fetchCount} doggos</span>
        <span className="text-sm">🐾</span>
      </div>
    </div>
  );
}
