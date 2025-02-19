  import Puppy from "@/components/fetchPuppy";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Puppy API Test 🐾</h1>
      <Puppy />
    </div>
  );
}
